require('dotenv').config({path:"./config/.env"});
const express = require('express');
const cors=require('cors');
const {seachFlight,fights}=require('./flightData/flights');
const router = require('./router/route');
const app=express();

app.use(cors());
app.use(express.json());
app.use('/',router);


app.listen(process.env.PORT,()=>{
    console.log(`application is running on PORT ${process.env.PORT}`);
});