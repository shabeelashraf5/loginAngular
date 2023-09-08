const mongoose = require('../config/config')

const ProfileSchema = new mongoose.Schema({
   
   
    image: { type: String },
  

})



const collectionprofile=new mongoose.model("profile" , ProfileSchema)

module.exports =  collectionprofile