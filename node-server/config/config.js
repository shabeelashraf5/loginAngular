const mongoose = require('mongoose')


mongoose.set('strictQuery', false)
mongoose.connect("mongodb://127.0.0.1/angular-web",{useNewUrlParser:true})
.then(()=>{
  console.log('Database Connected')
})
.catch(()=>{

    console.log('Failed to Connect')

})


module.exports = mongoose;
