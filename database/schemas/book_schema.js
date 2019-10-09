const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CommentSchema = require('./comment_schema');

const BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    published: {
        type: Date,
        required: true
    },
    // refereing to another document : normalisation technique
    author: {
        type: Schema.Types.ObjectId,
        ref: "Author"
    },
    // embedding another document : denormalisation technique
    comments: [{
        body: {
            type: String
        },
        created: {
            type: Date,
            required: true,
            default: Date.now()
        }
    }]
});

module.exports = BookSchema;