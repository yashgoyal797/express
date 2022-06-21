const AboutModel = require('../../models/About.js')

class AboutController{
    static about = async(req,res)=>{
        // res.render('admin/blog/blog')
        try{
            const result = await AboutModel.find()
            res.render('admin/about',{data: result})

        }
        catch(err){
            console.log(err)
        }
    }
    static editAbout = async(req,res)=>{
        //console.log(req.params.id)
        try{
            const result=await AboutModel.findById(req.params.id)
            //console.log(result)
            res.render('admin/updateAbout',{data:result})
        }catch(err){
            console.log(err)
        }

    }
    static updateAbout = async(req,res)=>{
        // console.log(req.params.id)
        // console.log(req.body)
        try{
            // const result=await BlogModel.findByIdAndUpdate(req.params.id, req.body)

            // if in form we write name other than fields of database than use below code
            const result = await AboutModel.findByIdAndUpdate(req.params.id , {

                about:req.body.about
            })
            await result.save()
            // end here
            //console.log(result)
            res.redirect('/admin/about')
        }catch(err){
            console.log(err)
        }
     
    }
    static viewAbout = async(req,res)=>{
        //console.log(req.params.id)
        try{
            const result=await AboutModel.find()
            //console.log(result)
            res.render('admin/about',{data:result})
        }catch(err){
            console.log(err)
        }
        //res.render('employe/display')
    }
}

module.exports = AboutController

