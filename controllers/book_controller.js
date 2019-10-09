const BookModel = require("../database/models/book_model");
const AuthorModel = require("../database/models/author_model");

const make = async (req, res) => {
    let authors = await AuthorModel.find().select('_id name');
    res.render("book/new", { authors });
}

const create = async (req, res) => {
    //logic for creating a resource
    let { title, published, author } = req.body;

    let book = await BookModel.create({ title, published, author })
        .catch(err => res.status(500).send(err));

    res.redirect(`/books/${book._id}`);
}

const show = async (req, res) => {
    let { id } = req.params
    // fetch the book from the database
    let book = await BookModel.findById(id).populate('author')
        .catch(err => res.status(500).send(err));
    //show a single resource
    res.render("book/show", {book});
}
module.exports = {
    make,
    create,
    show
}
