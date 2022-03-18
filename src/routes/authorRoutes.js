const express=require('express');
const authorRouter=express.Router();
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

authorRouter.use(multer({storage:imageStore}).single('image'));

function router(nav){
    //router to render authors page 
    authorRouter.get('/',function(req,res){
        Authordata.find()
        .then(function(authors){
            res.render("authors",{
                nav,
                authors
            })
        })   
    })
    
    // router to render individual authors
    authorRouter.get('/:id',function(req,res){
        const id=req.params.id
        Authordata.findOne({_id:id}).then(function(author){
            res.render('author',{
                nav,
                author
            })
        })  
    })

    // router to delete book
    authorRouter.post('/delete/:id',function(req,res){
        Authordata.findByIdAndDelete(req.params.id,function(err,docs){
            if(err){
                console.log(err);
            }
            else{
                res.redirect('/authors')
            }
        })
    })

    // router to update a book
    authorRouter.post('/update/:id',function(req,res){
        const id=req.params.id;
        Authordata.findByIdAndUpdate(id,
            {$set:req.body},function(err,docs){
            if(err){
                console.log(err);
            }
            else{
                res.redirect('/authors')
            }
        })
    })

    return authorRouter;
}



module.exports=router;