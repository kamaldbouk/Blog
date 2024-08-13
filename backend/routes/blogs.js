const express = require('express')
const {
    getblogs,
    getblog,
    createblog,
    editblog,
    deleteblog,
    upvoteblog,
    downvoteblog,
    addcommentblog
} = require('../controllers/blogController')
const router=express.Router()

//get all blogs
router.get('/', getblogs)

//get a single blogs
router.get('/:id', getblog)

//create a blog
router.post('/', createblog)

//edit a blog
router.patch('/:id', editblog)

//delete a blog
router.delete('/:id', deleteblog)

//upvote a blog
router.patch('/:id/upvote', upvoteblog)

//downvote a blog
router.patch('/:id/downvote', downvoteblog)

//add comment to a blog
router.post('/:id/comments', addcommentblog)



module.exports=router