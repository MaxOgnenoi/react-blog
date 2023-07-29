const express = require('express')
const app = express()
const blogRouter = require('./routes/blogRouter')

app.use(express.json)
app.use(express.static('public'))
app.use('/api/blogs', blogRouter)

module.exports = app