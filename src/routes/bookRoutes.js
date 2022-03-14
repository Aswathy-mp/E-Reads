const express=require('express');
const booksRouter=express.Router();
const Bookdata=require('../model/Bookdata');

function router(nav){
    // router to render books page
    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("books",{
                nav,
                books
            })
        })
        
    })
    
    // router to render individual book
    booksRouter.get('/:id',function(req,res){
        const id=req.params.id
        Bookdata.findOne({_id:id}).then(function(book){
            res.render('book',{
                nav,
                book
            })
        })
        
    })

    
    return booksRouter;
}



module.exports=router;