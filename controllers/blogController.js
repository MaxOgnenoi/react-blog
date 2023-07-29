const Blog = require('../models/blog')
const Comment = require('../models/comment')

exports.blogCreate = async (req, res) => {
    try {
        const blog = await Blog.create(req.body)
        res.json(blog)
    } catch (error) {
        req.status(400).json({ message: error.message })
    }
}

exports.blogIndex = async (req, res) => {
    try {
        const allBlogs = await Blog.find({})
        res.json(allBlogs)
    } catch (error) {
        req.status(400).json({ message: error.message })
    }
}

exports.blogShow = async (req, res) => {
    try {
        const blog = await Blog.findOne({ _id: req.params.id })
        res.json(blog)
    } catch (error) {
        req.status(400).json({ message: error.message })
    }
}

exports.blogUpdate = async (req, res) => {
    try {
        const blog = await Blog.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        res.json(blog)
    } catch (error) {
        req.status(400).json({ message: error.message })
    }
}

exports.blogDelete = async (req, res) => {
    try {
        const foundBlog = await Blog.findOneAndDelete({ _id: req.params.id })
        res.sendStatus(204)
    } catch (error) {
        req.status(400).json({ message: error.message })
    }
}

exports.addComment = async (req, res) => {
    try {
        const blog = await Blog.findOne({ _id: req.params.id })
        const comment = new Comment(req.body)
        blog.comments ?
            blog.comments.addToSet({ _id: comment._id }) : blog.comments = [{ _id: comment._id }]
            await comment.save()
    } catch (error) {

    }
}