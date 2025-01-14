const Task = require('../models/tasks');
const Status = require('../models/status');

const addTask = async (req, res) => {
    try {
        const { task, dueDate, createdBy } = req.body;
        const toDoObj = await Status.findOne({status:'todo'}).lean();
        const newTask = new Task({
            task,
            status: toDoObj._id,
            dueDate,
            createdBy
        })
        await newTask.save();
        res.status(201).json({ data: newTask });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getTasks = async (req, res) => {
    try {
        const kanban = {};
        const tasks = await Status.aggregate([
            {
                '$lookup': {
                    'from': 'tasks',
                    'localField': '_id',
                    'foreignField': 'status',
                    'as': 'result'
                }
            }
        ])
        for(let val of tasks){
            kanban[val.status] = val.result
        }
        res.status(200).json({ data: kanban });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const moveTask = async (req, res) => {
    try {
        const { taskId, newStatus } = req.body;
        const toDoObj = await Status.findOne({status:newStatus}).lean();
        const updatedTask = await Task.findByIdAndUpdate(taskId,{status:toDoObj._id})
        res.status(200).json({ data: updatedTask });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    addTask,
    getTasks,
    moveTask
}