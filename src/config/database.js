const mongoose=require('mongoose')
const dotenv=require('dotenv').config()
const MONGO_URI=process.env.MONGO_URI

const dbconnection=async()=>{
    await mongoose.connect(MONGO_URI)
}

module.exports=dbconnection