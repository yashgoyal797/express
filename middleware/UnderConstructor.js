var UnderConstructor=(req,res,next)=>{
    // console.log('construction in process!!')
    res.render("demo")
    next()
}
module.exports=UnderConstructor;