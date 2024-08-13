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
    author: {
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
    total: { type: Number, default: 0 },
    upvotedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], 
    downvotedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]  
}, { timestamps: true });


module.exports = mongoose.model('Blog', blogSchema);
