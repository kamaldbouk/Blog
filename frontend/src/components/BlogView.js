import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Technology from '../pages/img/Technology.jpg'
import Lifestyle from '../pages/img/Lifestyle.jpg'
import Travel from '../pages/img/Travel.jpg'
import Food from '../pages/img/Food.jpg'
import Education from '../pages/img/Education.jpg'
import Health from '../pages/img/Health.jpg'
import Entertainment from '../pages/img/Entertainment.jpg'
import Sports from '../pages/img/Sports.jpg'
import DefaultImage from '../pages/img/blog.jpg';
import icon from '../pages/img/icon.jpg';

const BlogView = () => {
    const { id } = useParams(); 
    const [blog, setBlog] = useState(null);

    useEffect(() => {
      
        const fetchBlog = async () => {
            try {
                const response = await fetch(`/api/blogs/${id}`);
                const data = await response.json();
                setBlog(data);
            } catch (error) {
                console.error('Error fetching blog:', error);
            }
        };

        fetchBlog();
    }, [id]);

    const categoryImages = {
        technology: Technology,
        lifestyle: Lifestyle,
        travel: Travel,
        food: Food,
        education: Education,
        health: Health,
        entertainment: Entertainment,
        sports: Sports,
    };
    const category = blog ? blog.category : 'Other';
    
    const imageSrc = categoryImages[category] || DefaultImage;

    const handleUpvote = async () => {
        try {
            const response = await fetch(`/api/blogs/${id}/upvote`, {
                method: 'PATCH',
            });
            if (response.ok) {
                const updatedBlog = await response.json();
                setBlog(updatedBlog);
            } else {
                console.error('Failed to upvote');
            }
        } catch (error) {
            console.error('Error upvoting:', error);
        }
    };

    const handleDownvote = async () => {
        try {
            const response = await fetch(`/api/blogs/${id}/downvote`, {
                method: 'PATCH',
            });
            if (response.ok) {
                const updatedBlog = await response.json();
                setBlog(updatedBlog);
            } else {
                console.error('Failed to downvote');
            }
        } catch (error) {
            console.error('Error downvoting:', error);
        }
    };

    if (!blog) {
        return <div>Loading...</div>;
    }

    return (
        <div className="blog-container">
            <div className='blog-header'>
                <img src={imageSrc} alt='Blog Header'/>
                <h1>TT{blog.title}</h1>
                <h3>Published by: {blog.author} <span className="secondary-text">{new Date(blog.createdAt).toLocaleDateString()}</span></h3>
                <h4>{blog.description}</h4>
            </div>
            <div className='blog-info'>
                <p>{blog.content}</p>
            </div>
            <div className='comment-section'>
                <div className='comment-header'>
                    <h3>Comment Section</h3>
                    <div className="vote-section">
                        <div className="vote-button upvote" onClick={handleUpvote}></div>
                        <div className="vote-count">{blog.upvotes - blog.downvotes}</div>
                        <div className="vote-button downvote" onClick={handleDownvote}></div>
                    </div>
                </div>
                <div className="comment-input-container">
                    <img src={icon} alt="icon"/>
                    <input type='text' className='comment-here' placeholder='Add a comment...' />
                    <button className='post-comment'>Post</button>
                </div>
                <p className='other-comments'>
                    <img src={icon} alt='icon'/>
                    <span>DISPLAY COMMENTS HERE</span>
                </p>
            </div>
        </div>
    );
};

export default BlogView;
