const mongoose = require('mongoose')

const commentSchema = new Schema(
    {
        content: { type: String, required: true }
    }, { timestamps: true }
)

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment