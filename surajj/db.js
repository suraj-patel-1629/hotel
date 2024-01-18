const mongoose = require(`mongoose`);

require("dotenv").config();
const DATABASE_URL = process.env.DATABASE_URL;

const connect= ()=>{
    mongoose.connect(DATABASE_URL,{
        
    })
    .then(()=>{
        console.log("database connection success");
    })
    .catch((error)=>{
        console.log(`db connection error`);
        console.error(error.message);
        process.exit(1);
    });
}
module.exports=connect;