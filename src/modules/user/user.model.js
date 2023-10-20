const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstname:String,
    surname:String,
    password:String,
    email:String,
    verified:{
        type:Boolean,
        default:false
    }
},{timestamps:true,versionKey:false})

module.exports= mongoose.model('User',UserSchema)