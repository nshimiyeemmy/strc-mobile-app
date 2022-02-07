
const User = require('../models/users');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const bcrypt = require('bcryptjs');



// Registering a user   => /api/v1/register
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    let user = new User ({ 
        firstname:req.body.firstname,
         lastname:req.body.lastname,
        email:req.body.email, 
        hashedPassword: bcrypt.hashSync(req.body.password,10),
        bio:req.body.bio, 
        isAdmin:req.body.isAdmin})
    if(!user)
     return res.status(200).send('user cannot be created');  
     res.send(user);
  });
  