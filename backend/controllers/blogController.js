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
    const { title, author, category, description, content, comments, upvotes, downvotes } = req.body;

    try {
        const blog = await Blog.create({
            title,
            author, 
            category,
            description,
            content,
            comments,
            upvotes,
            downvotes,
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

//upvote a blog
const upvoteblog= async (req,res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such blog' });
    }

    const blog = await Blog.findByIdAndUpdate(
        { _id: id },
        { $inc: { upvotes: 1 } }
    );

    if (!blog) {
        return res.status(400).json({ error: 'No such blog' });
    }

    res.status(200).json(blog);
}

//downvote a blog
const downvoteblog= async (req,res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such blog' });
    }

    const blog = await Blog.findByIdAndUpdate(
        { _id: id },
        { $inc: { downvotes: 1 } }
    );

    if (!blog) {
        return res.status(400).json({ error: 'No such blog' });
    }

    res.status(200).json(blog);

}

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