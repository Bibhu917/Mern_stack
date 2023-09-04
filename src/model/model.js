const mongoose=require('mongoose');
const userSchmea=mongoose.Schema({
    username:String,
    email:String,
    password:String,
    repassword:String,
    mobileNumber:Number
})
const userModel=mongoose.model('user',userSchmea);
module.exports=userModel;