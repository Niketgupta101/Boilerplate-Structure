const express = require("express");
const controller = require('../../controllers/auth.controller')

const router = express.Router();

router.get('/login', controller.login);

router.get('/signup', controller.signup);

router.get('/forgotPassword', controller.forgotPassword);

module.exports = router;