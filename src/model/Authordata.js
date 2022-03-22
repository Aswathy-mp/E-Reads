// accessing Mongoose Package
const mongoose=require('mongoose');

// Database Connection
mongoose.connect('mongodb+srv://Ereads:Ereads@fsd-training.ou3ia.mongodb.net/E-Reads?retryWrites=true&w=majority');

const Schema=mongoose.Schema;
const AuthorSchema=new Schema({
    author:String,
    about:String,
    genre:String,
    works:String,
    image:String
});

// Model Creation
var Authordata=mongoose.model('authordata',AuthorSchema);

// exporting the module
module.exports=Authordata;