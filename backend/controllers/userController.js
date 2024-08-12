const User = require('../models/userModel')
const mongoose=require('mongoose')
const jwt = require('jsonwebtoken') 

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
  }

//register user
const registeruser= async (req,res) => {
    const {name, email, password} = req.body

    try {
      const user = await User.signup(name, email, password)
  
      // create a token
      const token = createToken(user._id)
  
      res.status(200).json({name, email, token})
    } catch (error) {
      res.status(400).json({error: error.message})
    }
}

// login a user
const loginuser = async (req, res) => {
    const {email, password} = req.body
  
    try {
      const user = await User.login(email, password)
  
      // create a token
      const token = createToken(user._id)
  
      res.status(200).json({name: user.name, email, token})
    } catch (error) {
      res.status(400).json({error: error.message})
    }
}

//add a friend
const addfrienduser = async (req, res) => {
    const {id} = req.params;
    const {friendId} = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid user ID' });
    }
    if (!mongoose.Types.ObjectId.isValid(friendId)) {
        return res.status(400).json({ error: 'Invalid friend ID' });
    }

    try {
        const user = await User.findByIdAndUpdate(
            id,
            { $addToSet: { friends: friendId } }
        );

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const friend = await User.findById(friendId);
        if (friend) {
            await User.findByIdAndUpdate(
                friendId,
                { $addToSet: { friends: id } }
            );
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//get all friends
const getfriends = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid user ID' });
    }

    try {
        const user = await User.findById(id).populate('friends', 'email');
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        console.log("Friends List:", user.friends); // Log the friends array

        res.status(200).json(user.friends);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    registeruser,
    loginuser,
    addfrienduser,
    getfriends
}