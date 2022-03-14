const express=require('express');
const addbookRouter=express.Router();
const Bookdata=require('../model/Bookdata');

function router(nav){
    addbookRouter.get('/',function(req,res){
        res.render('addBook',{
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
                    image:req.body.image
                }
               var book=Bookdata(item);
                book.save();//saving to database
                res.redirect('/books');
    });
   
    return addbookRouter;
}

module.exports=router;