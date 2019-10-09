const BookModel = require('../database/models/book_model');
const create = async (req, res)=> {
    let {bookId} = req.params;
    let {body} = req.body;
    // find the book
    let book = await BookModel.findById(bookId)
        .catch(err => res.status(500).send(err));
    // add the comments to the book
    book.comments.push({body});
    // save the book to the database
    book.save()
    res.redirect(`/books/${bookId}`)
}

module.exports = {
    create
}

