const mongoose = require('mongoose');

const taskSchema =new mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    status:{
        type:mongoose.Types.ObjectId,
        required:true
    },
    inDate:{
        type:Date,
        default:()=>new Date()
    },
    dueDate:{
        type:Date,
        required:true
    },
    createdBy:{
        type:String,
    },
    createdAt:{
        type:Date,
        default:()=>new Date()
    }
})

module.exports = mongoose.model('task',taskSchema);