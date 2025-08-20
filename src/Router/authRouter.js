const express=require('express')
const authRouter=express.Router();
const User=require('../model/User')

authRouter.post('/userform',async(req,res)=>{
    try{
        const formData=req.body
        // never trust req.body
        const feilds=["Name","Email","Message"]
        const verifyFeilds=Object.keys(formData).every((k)=>feilds.includes(k))
        if(!verifyFeilds){
            throw new Error(" check feilds")
        }
        const email=formData.Email
        const verifyEmail=await User.findOne({Email:email})
        if(verifyEmail){
            throw new Error("Check email")
        }
        // instances of Schema
        const newUser=new User({
            Name:formData.Name,Email:formData.Email,
            Message:formData.Message
        })
        await newUser.save();
        res.send({
            message:`${formData.Name} user created`
        })
        
    }
    catch(error){
        res.status(400).json({
            message:error.message,
            msg1:"error in userForm creation"
        })
    }
})

module.exports=authRouter