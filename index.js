const express = require('express');
const dbUrl=require('./src/config/db');
const userRoute=require('./src/routes/route')
const cors = require('cors');
const bookssRoute = require('./src/routes/bookroute');
const app=express();

const corsOptions = { 
    origin: 'http://localhost:3000', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    allowedHeaders: 'Content-Type, Authorization'
};

app.use(cors(corsOptions));
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use('/auth',userRoute)
app.use('/books',bookssRoute)

app.get('/',(req,res)=>{
    return res.send({message:"Hello world from homepage"})
})

app.listen(8080,async()=>{
    await dbUrl;
    console.log('Server is listening on port 8080');
    console.log("Hello From server")
})