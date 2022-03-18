const express=require('express');
const loginRouter=express.Router();
const Signupdata=require('../model/Signupdata');


function router(nav){
    loginRouter.get('/',function(req,res){
        res.render('login',{
            nav
        })
    })

    // router for logIn and validation
    loginRouter.post('/add',function(req,res){
         var logindata={
             user:req.body.email,
             pwd:req.body.password
         }

         var flag=false;
         Signupdata.find().then(function(data){
             for(var i=0;i<data.length;i++){
                 if(logindata.user==data[i].email&&logindata.pwd==data[i].password){
                    flag=true;
                    break;
                 }
                 else if(logindata.user=='admin@gmail.com'&&logindata.pwd=='Asdf1234'){
                     console.log('admin login');
                     flag=true;
                    break;
                 }
                 else
                 {
                    flag=false
                 }
             }
             console.log(flag);
             if(flag==true){
                 res.redirect('/');
             }
             else{
                 res.redirect('/signup');
             }
         })
         
    });
    return loginRouter;
}

module.exports=router;