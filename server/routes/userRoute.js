const express = require('express');
const { isAuthenticatedUser } = require("../middlewares/auth");
const { registerUser, loginUser, logoutUser } = require('../controllers/userController');
const router = express.Router();


router.route("/register").post(registerUser);
router.route("/login").get(loginUser);
router.route("/logout").get(isAuthenticatedUser, logoutUser);


module.exports = router;