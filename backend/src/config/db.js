const mongoose=require('mongoose');
const databaseUrl=mongoose.connect("mongodb+srv://mernStack:mernStack@cluster0.y3jumbj.mongodb.net/");
module.exports=databaseUrl;