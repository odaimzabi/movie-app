const Schema=require('mongoose').Schema;
const mongoose=require('mongoose')
const User=new Schema({
    firstName:String,
    lastName:String,
    userName:String,
    password:String,
    tags:String,
})

module.exports=mongoose.model('User',User)