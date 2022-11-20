const mongoose = require('mongoose');
const User = require('./user');

const postSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: User
    }
}, {
    timestamps: true
});

const Post = mongoose.model('Post',postSchema);
module.exports = Post;