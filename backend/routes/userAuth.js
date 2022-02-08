const express = require('express');
const router = express.Router();

const {
    registerUser,
    getAllUsers,
    getUserDetails
  } = require('../controllers/usersAuthController');

  router.route('/register').post(registerUser);
  router.route('/admin/users').get(getAllUsers);
  router.route('/admin/user/:id').get(getUserDetails);


  module.exports = router;