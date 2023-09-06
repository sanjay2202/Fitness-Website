const mongoose = require("mongoose");

//creating a mongoose schema
const members = new mongoose.Schema({
    FullName : {
        type:String,
        required:true

    },
    gender : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true,
        unique:true
    },
    phone : {
        type:Number,
        required:true,
        unique:true
    },
    age : {
        type:Number,
        required:true
    },
    password : {
        type:String,
        required:true,
        
    },
    confirmpassword : {
        type:String,
        required:true,
        
    },
    // checkbox1 : {
    //     required:true,
    // }

})

// creating a mongoose.Collection

const Register = new mongoose.model("Resgister", members);

module.exports = Register;