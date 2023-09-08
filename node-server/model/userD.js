const mongoose = require('../config/config')


const SignUpSchema = new mongoose.Schema({

    fname: {type: String, trim: true } ,
    lname: {type: String, trim: true } ,
    email: {type: String, trim: true, unique: true},
    password: {type:String},
      
})

const collection=new mongoose.model("signup" , SignUpSchema)

module.exports =  collection 