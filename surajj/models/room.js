const mongoose = require("mongoose");

const roomSchemas = new mongoose.Schema({
     
    name:{
        type:String,
        require:true,

    },
    maxCount :{
        type :Number,
        require:true,

    },
    phoneNumber :{
      type:Number,
      require:true
    },
    rentPerDays:{
        type:Number,
        require :true,
    },
    imageUrls:[],
    currentBookings :[],
    type:{
        type:String,
        require:true,
    },
    description:{
  type:String,
  require:true,
    },
    


    
},{
    timestamps:true,
})

module.exports = mongoose.model("room", roomSchemas);