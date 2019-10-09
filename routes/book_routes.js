const express = require('express');
const router = express.Router();
const BookController = require('../controllers/book_controller');

router.get('/books/new', BookController.make);
router.post('/books', BookController.create);
router.get('/books/:id', BookController.show)

module.exports = router;

