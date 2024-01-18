const express = require("express");
const router = express.Router();

const  User = require("../models/user");
router.post("/register",async(req,res)=>{
    try{
       const {name,email,password,cpassword}=req.body;

       const existingUser = await User.findOne({email});
       if(existingUser){
        return res.status(400).json({
             success:false,
             message:"user already exist"
        })
       }
        const user= await User.create({
            name,email,password,cpassword
        });

        return res.status(200).json({
            success:true,
            message:"user created successfully"
        })
    }catch(err){
           console.error(err);
           res.status(500).json({
            success:false,
            message:"user cannot be registered"
           });
    }
});


router.post("/login",async(req,res)=>{
    
   try{
       
   const {email,password} = req.body;
   if(!email || !password){
      return res.status(400).json({
        success:false,
        message:"please fill all the detail"
      })
   }

    const user = await User.findOne({email: email,password:password});
   if(user){
    const temp = {
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        _id : user.id

    }
    res.send(temp);

}
    else{
        res.status(404).json({message:"Login failed"});
    }
   }  catch(errors){
    return res.status(404).json({error});
   }
    

});
module.exports= router;

