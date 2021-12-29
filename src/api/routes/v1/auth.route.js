const express = require("express");

const router = express.Router();

router.get('/authapi', (req, res) => res.send('auth api'));

module.exports = router;