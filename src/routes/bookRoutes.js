const express=require('express');
const booksRouter=express.Router();
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

booksRouter.use(multer({storage:imageStore}).single('image'));

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
    

    // router to delete book
    booksRouter.post('/delete/:id',function(req,res){
        Bookdata.findByIdAndDelete(req.params.id,function(err,docs){
            if(err){
                console.log(err);
            }
            else{
                res.redirect('/books')
            }
        })
    })

    // router to update a book
    booksRouter.post('/update/:id',function(req,res){
        const id=req.params.id;
        Bookdata.findByIdAndUpdate(id,
            {$set:req.body},function(err,docs){
            if(err){
                console.log(err);
            }
            else{
                res.redirect('/books')
            }
        })
    })

     return booksRouter;
}



module.exports=router;