import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import blogPic from '../pages/img/blog.jpg';
import icon from '../pages/img/icon.jpg';

const Blog = () => {
    const { id } = useParams(); // Extract the blog ID from the URL
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        // Fetch the blog data based on the ID
        const fetchBlog = async () => {
            try {
                const response = await fetch(`/api/blogs/${id}`); // Adjust the API endpoint as needed
                const data = await response.json();
                setBlog(data);
            } catch (error) {
                console.error('Error fetching blog:', error);
            }
        };

        fetchBlog();
    }, [id]);

    if (!blog) {
        return <div>Loading...</div>; // Display a loading message while fetching data
    }

    return (
        <div className="blog-container">
            <div className='blog-header'>
                <img src={blogPic} alt='Blog Header'/>
                <h1>{blog.title}</h1>
                <h3>Published by: {blog.author} <span className="secondary-text">{blog.createdAt}</span></h3> 
                <h4>DESC HERE</h4>
            </div>
            <div className='blog-info'>
                <p>{blog.content}</p>
            </div>
            <div className='comment-section'>
                <div className='comment-header'>
                    <h3>Comment Section</h3>
                    <div className="vote-section">
                        <div className="vote-button upvote"></div>
                        <div className="vote-count">{blog.upvotes-blog.downvotes}</div>
                        <div className="vote-button downvote"></div>
                    </div>
                </div>
                <div className="comment-input-container">
                    <img src={icon} alt="icon"/>
                    <input type='text' className='comment-here' placeholder='Add a comment...' />
                    <button className='post-comment'>Post</button>
                </div>
                <p className='other-comments'>
                    <img src={icon} alt='icon'/>
                    <span>{blog.comment}</span>
                </p>
            </div>
        </div>
    );
};

export default Blog;
