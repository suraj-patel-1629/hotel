const mongoose= require("mongoose");
const bookingSchema= mongoose.Schema({

    room:{
        type:String,
        require:true
    },
    roomid:{
         type:String,
         required:true
    },
    userid:{
      type:String,
      required:true
    },
    fromdate:{
        type:String,
        required:true
    },
    todate:{
        type:String,
        required: true
    },
    totaldays:{
        type:Number,
        required:true
    },
    totalamount:{
        type:Number,
        required:false
    },
    transactionid:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:false,
        deafult:'booked'
    }
},{
    timestamp:true,
})
module.exports= mongoose.model("booking",bookingSchema);