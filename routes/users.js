const express = require('express')
const router = express.Router();


//Loggin page
router.get('/login', (req, res) => res.render('Login'))

//Register Page
router.get('/register', (req, res) => res.render('Register'))

//register handle
router.post('/register', (req, res) => {
   const {name, email, password, password2} = req.body;
   let errors = []

   //check required fields
   if(!name || !email || !password || !password2){
       errors.push({msg: 'Please fill in all fields'})
   }

   //Check passwords match
   if(password !== password2){
       errors.push({msg: 'Passwords do not match'})
   }

   //Check Pass Length
   if(password.length < 6){
    errors.push({msg: 'Password needs to be 6 characters'})
   }

   if(errors.length > 0){
       res.render('register',{
        errors,
        name,
        email,
        password,
        password2
       });
   } else{
       res.send('pass')
   }
})

module.exports = router;