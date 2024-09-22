const express = require('express');
const router = express.Router();
const { getAllBooks } = require('../controllers/booksController');

router.get('/', getAllBooks);

module.exports = router;
