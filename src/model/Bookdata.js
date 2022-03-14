// accessing Mongoose Package
const mongoose=require('mongoose');

// Database Connection
mongoose.connect('mongodb://localhost:27017/EReads');
// mongoose.connect('mongodb+srv://aswathy:aswathy@fsd-training.ou3ia.mongodb.net/Libraryapp?retryWrites=true&w=majority');

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