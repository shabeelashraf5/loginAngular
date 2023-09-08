var path = require('path');
const multer = require('multer')


 const storage = multer.diskStorage({
    destination: 'assets/',
    filename: (req, file, cb) =>{
        cb(null, file.originalname)
    }
})

const upload = multer({
    storage:  storage,
    fileFilter: function(req, file, callback){
        if(
            file.mimetype == "image/jpeg" ||
            file.mimetype == "image/png"
        ){
            callback(null,true)

            }else{
                console.log("Only JPG & PNG file supported")
                const error = new Error("Only JPG and PNG files are supported")
                callback(error, false)
            }
    }
}) 

module.exports =  upload