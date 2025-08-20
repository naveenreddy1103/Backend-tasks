const express=require('express')
const app=express();
const cors=require('cors')
const dbconnection=require('./src/config/database')
const authRouter=require('./src/Router/authRouter')
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended:true}));
require('dotenv').config();
const PORT=process.env.PORT || 2001



app.use('/',authRouter)
dbconnection().then(()=>{
    console.log("database connected")
    app.listen(PORT,()=>{
        console.log(`server started`,PORT)
    })
}).catch(err=>{
    console.log(err.message)
})