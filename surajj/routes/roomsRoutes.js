const express = require("express");
const router = express.Router();

const Rooms = require("../models/room");

router.get("/getallRooms",async(req,res)=>{
    try{
    const rooms= await Rooms.find({});
  res.send(rooms);
    }
    
    catch(error){
        console.error(err);
        
        res.status(500)
        .json({
            success:false,
            
            error:err.message,
            message:"not found rooms",
        })
    }
});


router.post("/getroombyid",async(req,res)=>{
     const roomid = req.body.roomid;

    try{
    const rooms= await Rooms.findById({_id:roomid});
    
  res.send(rooms);
    }
    
    catch(err){
        console.error(err);
        
        res.status(500)
        .json({
            success:false,
            
            error:err.message,
            message:"not found rooms",
        })
    }
});

module.exports = router;