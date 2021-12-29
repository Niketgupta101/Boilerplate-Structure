const express = require("express");

const router = express.Router();

router.get('/userapi', (req, res) => res.send('user api'));

module.exports = router;