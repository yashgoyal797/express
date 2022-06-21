const express = require('express')
const AboutController = require('../controllers/admin/AboutController')
const ContactController = require('../controllers/ContactController')
const FrontController = require('../controllers/FrontController')
const AdminController = require('../controllers/AdminController')
const CategoryController = require('../controllers/admin/CategoryController')
const BlogController = require('../controllers/admin/BlogController')
const UnderConstructer = require('../middleware/UnderConstructor')
const router = express.Router()

//controller import
const{index,about,blog,contact,login}=require('../controllers/FrontController')
const ImageController = require('../controllers/imageController')
const UnderConstructor = require('../middleware/UnderConstructor')

// create route FrontController
router.get('/',FrontController.index)
router.get('/about',UnderConstructor, FrontController.about)
router.get('/blog',FrontController.blog)
router.get('/contact',FrontController.contact)
router.get('/login',FrontController.login)
router.get('/detail/:id',FrontController.detail)


//create route admincontroller
router.get('/admin/dashboard',AdminController.dashboard);

//create route admin category controller
router.get('/admin/category',CategoryController.all_category);
router.post('/admin/category_insert',CategoryController.category_insert);

//create route blogcontroller
router.get('/admin/blog',BlogController.blog);
router.get('/admin/createBlog',BlogController.createBlog);
router.post('/admin/blog_insert',BlogController.blog_insert);
router.get('/admin/blog/view/:id',BlogController.view);
//router.get('/admin/blog/editBlog',BlogController.editBlog);
router.get('/admin/blog/edit/:id',BlogController.edit);
router.post('/admin/update/:id',BlogController.update);
router.get('/admin/blog/delete/:id',BlogController.delete);

// image controller
router.get("/createImage",ImageController.createImage);
router.post("/imageInsert",ImageController.imageInsert);
router.get("/imagedisplay",ImageController.image_display);
// about controller
router.get('/admin/about',AboutController.about);
router.get('/admin/editAbout/:id',AboutController.editAbout);
router.post('/admin/updateAbout/:id',AboutController.updateAbout);
router.get('/admin/viewAbout/:id',AboutController.viewAbout);

//create route contactcontroller
router.get('/admin/contact',ContactController.contact);
router.post('/contact_insert',ContactController.contact_insert);
router.get('/admin/viewContact/:id',ContactController.viewContact);
module.exports = router