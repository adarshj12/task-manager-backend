const mongoose = require('mongoose');

const statusSchema =new mongoose.Schema({
    status:{
        type:String,
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

module.exports = mongoose.model('status',statusSchema);