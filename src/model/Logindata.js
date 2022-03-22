// accessing Mongoose Package
const mongoose=require('mongoose');

// Database Connection
mongoose.connect('mongodb+srv://Ereads:Ereads@fsd-training.ou3ia.mongodb.net/E-Reads?retryWrites=true&w=majority');

// Schema defnition
const Schema=mongoose.Schema;
const LoginSchema=new Schema({
    email:String,
    password:String
});

// Model Creation
var Logindata=mongoose.model('logindata',LoginSchema);

// exporting the module
module.exports=Logindata;