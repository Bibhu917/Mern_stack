const mongoose=require('mongoose');
const bookSchema=mongoose.Schema({
    name:String,
    author: String,
    description: String,
    price: Number,
    available:Boolean,
    image:String
})
const bookModel=mongoose.model('books',bookSchema);
module.exports=bookModel;