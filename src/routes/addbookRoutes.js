const express=require('express');
const addbookRouter=express.Router();
const Bookdata=require('../model/Bookdata');
const multer=require('multer');

const imageStore=multer.diskStorage({
    destination:function(req,file,callback){
        callback(null,'./public/images')
    },

    filename:function(req,file,callback){
        callback(null,file.originalname)
    }
})

addbookRouter.use(multer({storage:imageStore}).single('image'));

function router(nav){
    addbookRouter.get('/',function(req,res){
        res.render('addbook',{
            nav
        })
    })

    // to add new book
    addbookRouter.post('/add',function(req,res){
         var item={
                    title:req.body.title,
                    author:req.body.author,
                    genre:req.body.genre,
                    about:req.body.about,
                    image:req.file.filename
                }
               var book=Bookdata(item);
                book.save();//saving to database
                res.redirect('/books');
    });
   
    return addbookRouter;
}

module.exports=router;