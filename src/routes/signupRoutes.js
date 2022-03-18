const express=require('express');
const signupRouter=express.Router();
const Signupdata=require('../model/Signupdata');

function router(nav1){
    signupRouter.get('/',function(req,res){
        res.render('signup',{
            nav1
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
                res.redirect('/login');
    });
    return signupRouter;
}

module.exports=router;