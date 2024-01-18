const express= require('express');
const router= express.Router();
const Booking = require("../models/booking");


router.post("/bookroom",async(req,res)=>{
    const {room,userid,fromdate,todate,totaldays}=req.body;

    try{
         const newbooking= new Booking({
            room:room.name,
            roomid:room._id,
            userid,
            fromdate,
            todate,
            totaldays,
            transactionid :'1234'
         })
         const booking =await newbooking.save();
    }catch(error){

    }
});

module.exports= router;