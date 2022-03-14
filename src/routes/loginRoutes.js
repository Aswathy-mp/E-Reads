const express=require('express');
const loginRouter=express.Router();
const Logindata=require('../model/Logindata');

function router(nav){
    loginRouter.get('/',function(req,res){
        res.render('login',{
            nav
        })
    })
    
    loginRouter.post('/add',function(req,res){
         var item={
                    
                    email:req.body.email,
                    password:req.body.password,
                }
               var newlogin=Logindata(item);
                newlogin.save();//saving to database
                res.redirect('/');
    });
    return loginRouter;
}

module.exports=router;