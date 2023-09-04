const express = require('express');
const dbUrl=require('./src/config/db');
const userRoute=require('./src/routes/route')
const cors = require('cors');
const app=express();


app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use('/auth',userRoute)
app.use(cors());

app.get('/',(req,res)=>{
    return res.send({message:"Hello world from homepage"})
})

app.listen(8080,async()=>{
    await dbUrl;
    console.log('Server is listening on port 8080');
    console.log("Hello From server")
})