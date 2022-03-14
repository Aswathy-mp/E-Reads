const express=require('express');
const signupRouter=express.Router();
const Signupdata=require('../model/Signupdata');

function router(nav){
    signupRouter.get('/',function(req,res){
        res.render('signup',{
            nav
        })
    })
    
    signupRouter.post('/add',function(req,res){
         var item={
                    
                    user:req.body.user,
                    email:req.body.email,
                    password:req.body.password,
                }
               var newsignup=Signupdata(item);
                newsignup.save();//saving to database
                res.redirect('/');
    });
    return signupRouter;
}

module.exports=router;