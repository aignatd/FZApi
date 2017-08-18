var express = require('express');
var router = express.Router();
var userctrl = require('./../controllers/userctrl');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* API for user login */
router.post('/login', userctrl.postUserLogin, userctrl.postUpdateUserStatus);

/* API for user logout */
router.post('/logout', userctrl.postUserLogout, userctrl.postUpdateUserStatus);

/* API for user change password */
router.post('/changepassword', userctrl.postChangePassword);

/* API for user registration */
router.post('/registration', userctrl.postRegistration);

module.exports = router;
