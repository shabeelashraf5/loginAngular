var express = require('express');
var router = express.Router();
const collection = require('../model/userD')
const collectionprofile = require('../model/profileD')
const jwt = require('jsonwebtoken');
const upload = require('../fileupload/upload')
const { generateToken } = require('../middleware/userauth')


router.post('/signup', async function(req,res){

    const data = {
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        password: req.body.password,
    }
    try {
        await collection.insertMany([data]);
        return res.json({
            data: [],
            success: true,
            message: 'SUCCESS'
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: 'An error occurred'
        });
    }

})


router.post('/homepage', async function(req,res){

  try {
      const { email, password } = req.body;
  
    
      const user = await collection.findOne({ email });
  
      if (!user) {
        return res.status(401).json({ message: 'Authentication failed' });
      }
  
  
      if (password !== user.password) {
        return res.status(401).json({ message: 'Authentication failed' });
      }

     
      const token = generateToken(user);

      console.log('Generated JWT Token:', token);
  

      res.status(200).json({ message: 'Authentication successful', user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }


})

router.post('/addprofile', upload.single('image'), async function(res,req){

  const image = req.files 
  const banner = {
    image,   
};

try {
  await collectionprofile.create(banner);
  console.log(req.files);
  res.status(200).json({ message: 'Profile created successfully' });
 
} catch (err) {
  console.error('Profile creation failed', err);
  res.status(500).json({ error: 'Profile creation failed' });
 
}
})

router.get('/admin/dashboard', async (req, res) => {
  try {
    const users = await collection.find({}).exec(); 
    console.log('Users:', users);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.post('/admin/dashboard', async function(req,res){

  try {

    const check = await collection.findOne({
      email: 'shabeelash5@gmail.com'
  })
  
      if (!check) {
        return res.status(401).json({ message: 'Authentication failed' });
      }
  
  
      if (req.body.password !== check.password) {
        return res.status(401).json({ message: 'Authentication failed' });
      }
      

     
      const token = generateToken(check);

      console.log('Generated JWT Token:', token);
  
      if(check.password === req.body.password){
      res.status(200).json({ message: 'Authentication successful', check });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }


})


router.post('/admin/dashboard/create', async function (req,res){

  const user = {
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    password: req.body.password,
}
try {
    await collection.insertMany([ user]);
    return res.json({
          user: [],
        success: true,
        message: 'SUCCESS'
    });
} catch (error) {
    console.error(error);
    return res.status(500).json({
        success: false,
        message: 'An error occurred'
    });
}


})


router.put('/admin/dashboard/update/:id', async function (req,res){

  try {
    const item = await collection.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: 'Could not update item' });
  }

})


router.delete('/admin/dashboard/delete/:id', async function (req,res){
  try {
    await collection.findByIdAndRemove(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Could not delete item' });
  }


})

module.exports = router;