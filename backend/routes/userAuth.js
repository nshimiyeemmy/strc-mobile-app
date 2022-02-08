const express = require('express');
const router = express.Router();

const {
    registerUser,
    getAllUsers
  } = require('../controllers/usersAuthController');

  router.route('/register').post(registerUser);
  router.route('/admin/users').get(getAllUsers);

  module.exports = router;