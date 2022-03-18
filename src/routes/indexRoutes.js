const express=require('express');
const indexRouter=express.Router();


function router(nav1){
    indexRouter.get('/',function(req,res){
        res.render('index',{
            nav1
        })
    })

    
    return indexRouter;
}

module.exports=router;