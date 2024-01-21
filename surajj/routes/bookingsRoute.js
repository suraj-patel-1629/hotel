const express= require('express');
const router= express.Router();
const Booking = require("../models/booking");


router.post("/bookroom",async(req,res)=>{
    const {room,userid,todate,fromdate,totaldays}=req.body;
    try{
         const newbooking= new Booking( {
            room:room.name,
            roomid:room._id,
            userid,
            todate,
            fromdate,
            totaldays,
            transactionid :'1234'
         })
         
         const booking =await newbooking.save();
         
         res.send("booked sucessfully");
    }catch(error){
        console.log(error);
        return res.status(400).json({
    error
        })
    }
});

module.exports= router;