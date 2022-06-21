const ImageModel = require("../models/image")

class ImageController {
    static createImage = async (req, res) => {
res.render("image/createImage")

    }
    static imageInsert=async(req,res)=>{
       
        try{
            const result=await ImageModel({
                title:req.body.title,
                image:req.body.image
            })
          await result.save()
            res.redirect('/createImage')
        }catch(err){
            console.log(err)
        }
       
    }
    static image_display=async(req,res)=>{
        try{
            const  result=await ImageModel.find()
            res.render('image/imagedisplay',{data:result})
        }catch(err){
            console.log(err)
        }
    }
}
  

module.exports = ImageController
