const blogController = require('../controllers/blogController')
const router = require('express').Router()

router.get('/', blogController.blogIndex)
router.post('/', blogController.blogCreate)
router.put('/:id', blogController.blogUpdate)
router.delete('/:id', blogController.blogDelete)
router.get('/:id', blogController.blogShow)

module.exports = router