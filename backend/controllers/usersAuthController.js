
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
        isAdmin:req.body.isAdmin
    })
    user = await user.save();
      res.status(200).json({
        success: true,
        User: user,
      });
    });

        //Get user details  => /api/v1/admin/user/:id
exports.getUserDetails = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return next(
      new ErrorHandler(`User not found with id ${req.params.id}`, 400)
    );
  }
  res.status(200).json({
    success: true,
    User: user,
  });
});


  //Admin routes
//Get all Users  => /api/v1/admin/users
exports.getAllUsers = catchAsyncErrors(async (req, res, next) => {
    const users = await User.find().select('-hashedPassword');
    if (!users || users.length<=0) {
        return next(
          new ErrorHandler(`No users found`, 400)
        );
      }
    res.status(200).json({
      success: true,
      Users: users,
    });

  });
  