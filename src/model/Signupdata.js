// accessing Mongoose Package
const mongoose=require('mongoose');

// Database Connection
mongoose.connect('mongodb://localhost:27017/EReads');

// Schema defnition
const Schema=mongoose.Schema;
const SignupSchema=new Schema({
    name:String,
    email:String,
    password:String
});

// Model Creation
var Signupdata=mongoose.model('signupdata',SignupSchema);

// exporting the module
module.exports=Signupdata;