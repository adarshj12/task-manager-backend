const path = require('path');
require('dotenv').config({path:path.join(__dirname,'..','.env')});
const mongoose = require('mongoose');

const conn = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI).then(respo=>{
            console.log(`database connected`);
        }).catch(err=>{
            console.log(`error in db connection - ${err}`)
        })
    } catch (error) {
        console.log(`error in db - ${error}`)
    }
}

module.exports = conn;