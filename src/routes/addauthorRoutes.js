const express=require('express');
const addauthorRouter=express.Router();
const Authordata=require('../model/Authordata');
const multer=require('multer');

const imageStore=multer.diskStorage({
    destination:function(req,file,callback){
        callback(null,'./public/images')
    },

    filename:function(req,file,callback){
        callback(null,file.originalname)
    }
})

addauthorRouter.use(multer({storage:imageStore}).single('image'));

function router(nav){
    addauthorRouter.get('/',function(req,res){
        res.render('addauthor',{
            nav
        })
    })
    addauthorRouter.post('/add',function(req,res){
         var item={
                    
                    author:req.body.author,
                    about:req.body.about,
                    genre:req.body.genre,
                    works:req.body.works,
                    image:req.file.filename
                }
               var newauthor=Authordata(item);
                newauthor.save();//saving to database
                res.redirect('/authors');
    });
    return addauthorRouter;
}

module.exports=router;