const Router = require('express');
const bookssRoute = Router();
const bookModel=require('../model/bookmodel')

bookssRoute.post('/addBook',async(req,res)=>{
    const {name,author,description,price,available,image}=req.body
    if(!name || !author || !description || !price || !available || !image){
        return res.send({message:"Please Enter all the fields"});
    }
    const bookdata=new bookModel({name,author,description,price,available,image})
    await bookdata.save();
    return res.status(200).send({message:"Book created successfully",bookdata})
})

module.exports = bookssRoute