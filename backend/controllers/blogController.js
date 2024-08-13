const Blog =require('../models/blogModel')
const mongoose=require('mongoose')

//get all blogs
const getblogs= async (req,res) => {
    const blogs = await Blog.find({}).sort({createdAt: -1})
    res.status(200).json(blogs)
}

//get a single blog
const getblog= async (req,res) => {
    const {id}=req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:'No such blog'})
    }

    const blog= await Blog.findById(id)

    if (!blog) {
        return res.status(404).json({error:'No such blog'})
    }

    res.status(200).json(blog)
}

//create a blog
const createblog = async (req, res) => {
    const { title, author, category, description, content, comments, total, upvotedBy,downvotedBy } = req.body;

    try {
        const blog = await Blog.create({
            title,
            author, 
            category,
            description,
            content,
            comments,
            total, 
            upvotedBy,
            downvotedBy
        });

        res.status(200).json(blog);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


//edit a blog
const editblog= async (req,res) => {
    const {id}=req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:'No such blog'})
    }

    const blog = await Blog.findOneAndUpdate({_id:id},{
        ...req.body
    })

    if (!blog) {
        return res.status(400).json({error:'No such blog'})
    }

    res.status(200).json(blog)
}

//delete a blog
const deleteblog= async (req,res) => {
    const {id}=req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:'No such blog'})
    }

    const blog=await Blog.findOneAndDelete({_id: id})

    if (!blog) {
        return res.status(400).json({error:'No such blog'})
    }
    res.status(200).json(blog)
}

const jwt = require('jsonwebtoken');

// Function to verify token and extract user ID
const verifyToken = (req) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        throw new Error('Authentication required');
    }

    const decoded = jwt.verify(token, process.env.SECRET);
    return decoded._id;
};

//upvote a blog
const upvoteblog = async (req, res) => {
    try {
        const userId = verifyToken(req); // Extract the user ID from the token
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: 'No such blog' });
        }

        const blog = await Blog.findById(id);
        if (!blog) {
            return res.status(400).json({ error: 'No such blog' });
        }

        // Check if user has already upvoted
        if (blog.upvotedBy.includes(userId)) {
            return res.status(400).json({ error: 'You have already upvoted this blog' });
        }

        // Remove the user from downvotedBy if they had downvoted previously
        if (blog.downvotedBy.includes(userId)) {
            blog.downvotedBy = blog.downvotedBy.filter(user => !user.equals(userId));
        }

        blog.total += 1;
        blog.upvotedBy.push(userId);

        await blog.save();

        res.status(200).json(blog);
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
};

//downvote a blog
const downvoteblog = async (req, res) => {
    try {
        const userId = verifyToken(req); // Extract the user ID from the token
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: 'No such blog' });
        }

        const blog = await Blog.findById(id);
        if (!blog) {
            return res.status(400).json({ error: 'No such blog' });
        }

        // Check if user has already downvoted
        if (blog.downvotedBy.includes(userId)) {
            return res.status(400).json({ error: 'You have already downvoted this blog' });
        }

        // Remove the user from upvotedBy if they had upvoted previously
        if (blog.upvotedBy.includes(userId)) {
            blog.upvotedBy = blog.upvotedBy.filter(user => !user.equals(userId));
        }
        blog.total -= 1;
        blog.downvotedBy.push(userId);

        await blog.save();

        res.status(200).json(blog);
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
};


//add comment to a blog
const addcommentblog = async (req, res) => {
    const { id } = req.params; 
    const { name, text } = req.body; 

    // Validate ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such blog' });
    }

    try {
        // Add comment to the blog
        const blog = await Blog.findByIdAndUpdate(
            id,
            {
                $push: {
                    comments: { name, text }
                }
            }
        );

        // Check if blog was found
        if (!blog) {
            return res.status(404).json({ error: 'No such blog' });
        }
        res.status(200).json(blog);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


module.exports = {
    getblogs,
    getblog,
    createblog,
    editblog,
    deleteblog,
    upvoteblog,
    downvoteblog,
    addcommentblog
}