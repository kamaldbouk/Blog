const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    postedOn: {
        type: Date,
        default: Date.now
    }
}, { _id: false });

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    comments: [commentSchema],
    upvotes: {
        type: Number,
        default: 0
    },
    downvotes: {
        type: Number,
        default: 0
    }
}, { timestamps: true });


module.exports = mongoose.model('Blog', blogSchema);
