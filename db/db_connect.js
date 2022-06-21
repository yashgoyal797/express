const mongoose =require('mongoose');

const connectDB=()=>{
    return mongoose.connect("mongodb://localhost:27017/BlogDB")
    .then(()=>{
        console.log('Connect Successfully')
    })
    .catch((err)=>{
        console.log(err)
    })
}



module.exports = connectDB