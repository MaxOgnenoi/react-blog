const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
})

const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog
