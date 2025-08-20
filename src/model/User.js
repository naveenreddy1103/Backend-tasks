const mongoose=require('mongoose')
const validator=require('validator')

const userSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true,
        min:2,
        max:30
    },
    Email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email invaild')
            }
        }
    },
    Message:{
        type:String,
        max:50
    }
},{timestamps:true})

module.exports=mongoose.model('User',userSchema)