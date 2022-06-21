const BlogModel = require("../models/blog.js")
const CategoryModel=require("../models/category.js")
class FrontController {
    static index = async (req, res) => {
        try {
            const result = await BlogModel.find()
            res.render("front/index", { data: result })
            console.log(result)
            res.render('front/index')
        } catch (err) { console.log(err) }
    }
    static about = async (req, res) => {
        res.render('front/about')
    }
    static contact = async (req, res) => {
        res.render('front/contact')
    }
    static blog = async (req, res) => {
        res.render('front/blog')
    }
    static login = async (req, res) => {
        res.render('front/login')
    }
    static detail = async (req, res) => {
        // console.log(req.params.id)
        try {
            const result1= await CategoryModel.find()
            const result2 = BlogModel.findById(req.params.id)
            const result3 = BlogModel.find(req.params.id)
            res.render("front/detail", { data: result2,cat:result1,info:result3 })
            // console.log(result1)


        } catch (err) {
            console.log(err)
        }
    }


    static detail = async (req, res) => {
        res.render('front/detail')
    }
}


module.exports = FrontController