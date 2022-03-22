// accessing Mongoose Package
const mongoose=require('mongoose');

// Database Connection
mongoose.connect('mongodb+srv://Ereads:Ereads@fsd-training.ou3ia.mongodb.net/E-Reads?retryWrites=true&w=majority');

// Schema defnition
const Schema=mongoose.Schema;
const BookSchema=new Schema({
    title:String,
    author:String,
    genre:String,
    about:String,
    image:String
});

// Model Creation
var Bookdata=mongoose.model('bookdata',BookSchema);

// exporting the module
module.exports=Bookdata;