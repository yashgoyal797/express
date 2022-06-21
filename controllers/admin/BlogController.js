const CategoryModel = require('../../models/category.js')
const BlogModel = require('../../models/blog.js')

class BlogController{
    static blog = async(req,res)=>{
        // res.render('admin/blog/blog')
        try{
            const result = await BlogModel.find()
            res.render('admin/blog/blog',{database: result})

        }
        catch(err){
            console.log(err)
        }
    }

    static createBlog = async(req,res)=>{
        try{
            const result = await CategoryModel.find()
            //console.log(result)
            res.render('admin/blog/createBlog', {cat:result})
        }
        catch(err)
        {
            console.log(err)
        }
        
    }

    static blog_insert = async(req,res)=>{
         //console.log(req.body.category_name)
        try{
          const result = new BlogModel({
              category_name : req.body.category_name,
              title : req.body.title,
              description : req.body.description

          })
          await result.save()
          res.redirect('/admin/blog')
        }
        catch(err)
        {
         console.log(err)
        }
     }


    static view = async(req,res)=>{
        //console.log(req.params.id)
        try{
            const result=await BlogModel.findById(req.params.id)
            //console.log(result)
            res.render('admin/blog/viewBlog',{data:result})
        }catch(err){
            console.log(err)
        }
        //res.render('employe/display')
    }
    static edit = async(req,res)=>{
        //console.log(req.params.id)
        try{
            const result=await BlogModel.findById(req.params.id)
            //console.log(result)
            res.render('admin/blog/editBlog',{data:result})
        }catch(err){
            console.log(err)
        }

        
        //res.render('employe/display')
    }
    static update = async(req,res)=>{
        // console.log(req.params.id)
        // console.log(req.body)
        try{
            // const result=await BlogModel.findByIdAndUpdate(req.params.id, req.body)

            // if in form we write name other than fields of database than use below code
            const result = await BlogModel.findByIdAndUpdate(req.params.id , {
                title: req.body.title,
                category_name:req.body.category_name,
                description:req.body.description
            })
            await result.save()
            // end here

            //console.log(result)
            res.redirect('/admin/blog')
        }catch(err){
            console.log(err)
        }
        //res.render('employe/display')
    }
    static delete = async(req,res)=>{
        //console.log(req.params.id)
        try{
            const result=await BlogModel.findByIdAndDelete(req.params.id)
            //console.log(result)
            res.redirect('/admin/blog')
        }catch(err){
            console.log(err)
        }
        //res.render('employe/display')
    }
}

module.exports = BlogController