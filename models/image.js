const mongoose =require('mongoose');

//define Schema
const ImageSchema =new mongoose.Schema({
    
   
    title:{type:String, required:true, trim:true},
    image:{type:String, required:true, trim:true}
   
},{timestamps:true})


const ImageModel = mongoose.model('image',ImageSchema);


module.exports =ImageModel ;  