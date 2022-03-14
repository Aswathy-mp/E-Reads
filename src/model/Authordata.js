// accessing Mongoose Package
const mongoose=require('mongoose');

// Database Connection
mongoose.connect('mongodb://localhost:27017/EReads');
// mongoose.connect('mongodb+srv://aswathy:aswathy@fsd-training.ou3ia.mongodb.net/Libraryapp?retryWrites=true&w=majority');

// Schema defnition
const Schema=mongoose.Schema;
const AuthorSchema=new Schema({
    author:String,
    about:String,
    genre:String,
    image:String
});

// Model Creation
var Authordata=mongoose.model('authordata',AuthorSchema);

// exporting the module
module.exports=Authordata;