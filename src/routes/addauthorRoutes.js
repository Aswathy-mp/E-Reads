const express=require('express');
const addauthorRouter=express.Router();
const Authordata=require('../model/Authordata');

function router(nav){
    addauthorRouter.get('/',function(req,res){
        res.render('addAuthor',{
            nav
        })
    })
    
    addauthorRouter.post('/add',function(req,res){
         var item={
                    
                    author:req.body.author,
                    about:req.body.about,
                    genre:req.body.genre,
                    image:req.body.image
                }
               var newauthor=Authordata(item);
                newauthor.save();//saving to database
                res.redirect('/authors');
    });
    return addauthorRouter;
}

module.exports=router;