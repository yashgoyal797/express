const mongoose =require('mongoose');

//define Schema
const AboutSchema =new mongoose.Schema({
    about:{type:String, required:true, trim:true}
   
},{timestamps:true})


const AboutModel = mongoose.model('about',AboutSchema);


module.exports =AboutModel ;  