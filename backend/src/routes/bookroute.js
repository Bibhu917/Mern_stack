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

bookssRoute.get('/booklist',async(req,res)=>{
    try {
        const booklist=await bookModel.find();
        return res.send({message:"List of books are",booklist})
    } catch (error) {
        console.log(error);
        return res.send({message:"Server Error"});
    }

})


bookssRoute.get('/singleBook/:id',async(req,res)=>{
    try {
        const {id}=req.params
        const singleData=await bookModel.findById(id);
        if(!singleData){
            return res.send({message:"Book Not found"})
        }
        return res.send({message:"Single Book Data are",singleData})
    } catch (error) {
      console.log(error);
      return res.status(500).send({message:"Server error"})  
    }

})

bookssRoute.patch('/updateBook/:id',async(req,res)=>{
    try {
        const {id}=req.params;
        const bookUpdatedetails=req.body
        const  updateData= await bookModel.findByIdAndUpdate(id,bookUpdatedetails,{new:true,runValidators:true});
        return res.send({message:"Data Updated Successfully",updateData})
    } catch (error) {
        console.log(error);
        return res.status(500).send({message:"Server error"})
    }
})

bookssRoute.delete('/deletebook/:id',async(req,res)=>{
    try {
       const {id} = req.params;
       const data=await bookModel.findByIdAndDelete(id);
       return res.status(200).send({message:"Book deleted successfully",data});
    } catch (error) {
        console.log(error);
        return res.status(500).send({message:"Server Error"})
    }
})


module.exports = bookssRoute