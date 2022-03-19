const express=require('express');
const app=express();
const nav=[
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/addbook',name:'Add Book'
    },
    {
        link:'/addauthor',name:'Add Author'
    }
]

const nav1=[
        {
            link:'/login',name:'Log In'
        },
        {
            link:'/signup',name:'Sign Up'
        } 
]

const booksRouter=require('./src/routes/bookRoutes')(nav);
const authorRouter=require('./src/routes/authorRoutes')(nav);
const addbookRouter=require('./src/routes/addbookRoutes')(nav);
const addauthorRouter=require('./src/routes/addauthorRoutes')(nav);
const loginRouter=require('./src/routes/loginRoutes')(nav1);
const signupRouter=require('./src/routes/signupRoutes')(nav1);
const indexRouter=require('./src/routes/indexRoutes')(nav);

app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine','ejs');
app.set('views',__dirname+'/src/views');
app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/addbook',addbookRouter);
app.use('/addauthor',addauthorRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/index1',indexRouter);

app.get('/',function(req,res){
    res.render('index',{
        nav1
    });
});

const PORT=process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log(`Our library app is running on port ${PORT}`);
});