const express = require('express')
const {
    registeruser,
    loginuser,
    addfrienduser,
    getfriends
} = require('../controllers/userController')
const router=express.Router()

//register user
router.post('/register', registeruser)

//login user
router.post('/login', loginuser)

//add a friend
router.post('/:id/friends', addfrienduser)

//get all friends for an id
router.get('/:id/friends', getfriends)

module.exports=router