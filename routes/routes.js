const express = require('express');
const router = express.Router();
const controller = require('../controller/adviceController');

router.get('/advice', controller.get);
router.get('/advice/:id', controller.getById);

module.exports = router