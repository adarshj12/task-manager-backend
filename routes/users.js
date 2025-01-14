const express = require('express');
const router = express.Router();
const { 
    addTask, 
    getTasks,
    moveTask
} = require('../controllers/userController');

router.post('/task',addTask);
router.get('/task',getTasks);
router.patch('/task',moveTask);

module.exports = router;