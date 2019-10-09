const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    published: {
        type: Date,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "Author"
    }
});

module.exports = BookSchema;