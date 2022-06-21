const ContactModel= require('../models/Contact.js')

class ContactController{
    static contact = async(req,res)=>{
       // res.render('admin/category/all_category')
        try{
            const result = await ContactModel.find()
            res.render('admin/contact',{data: result})

        }
        catch(err){
            console.log(err)
        }
    }
    static contact_insert = async(req,res)=>{
       // console.log(req.body)
       try{
         const result = new ContactModel({
             name : req.body.name,
             email : req.body.email,
             phone : req.body.phone,
             message : req.body.message
         })
         await result.save()
        res.redirect('/contact')
       }
       catch(err)
       {
        console.log(err)
       }
    }
    static viewContact = async(req,res)=>{
        //console.log(req.params.id)
        try{
            const result=await ContactModel.find()
            //console.log(result)
            res.render('admin/contact',{data:result})
        }catch(err){
            console.log(err)
        }
        //res.render('employe/display')
    }
}

module.exports = ContactController