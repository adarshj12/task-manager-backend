const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./db/config');

const userRoute = require('./routes/users');

app.use(express.json());
app.use(cors());
app.use('/',userRoute);

app.listen(7000,async()=>{
    await connection();
    console.log('server running at 4000');
})