import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Technology from '../pages/img/Technology.jpg'
import Lifestyle from '../pages/img/Lifestyle.jpg'
import Travel from '../pages/img/Travel.jpg'
import Food from '../pages/img/Food.jpg'
import Education from '../pages/img/Education.jpg'
import Health from '../pages/img/Health.jpg'
import Entertainment from '../pages/img/Entertainment.jpg'
import Sports from '../pages/img/Sports.jpg'
import DefaultImage from '../pages/img/blog.jpg';

const BlogProfileView = ({ blog }) => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);

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


    const handleEditBlog = (event) => {
        event.stopPropagation();
        navigate(`/editblog/${blog._id}`);
    };

    const routeBlog = () => {
        navigate(`/blog/${blog._id}`);
    };

    const handleDeleteBlog = async (event) => {
        event.stopPropagation();
        
        try {
            const response = await fetch(`/api/blogs/${blog._id}`, {
                method: 'DELETE',
            });

            const json = await response.json();

            if (!response.ok) {
                setError(json.error);
                console.error('Failed to delete blog:', json.error);
            } else {
                console.log('Blog deleted:', json);
                navigate('/home'); 
            }
        } catch (error) {
            setError('Failed to delete blog.');
            console.error('Error deleting blog:', error);
        }
    };

    return (
        <div className='blog-item' onClick={routeBlog}>
            <img src={imageSrc} alt={category} className='blog-profile-image'/>
            <h3>{blog.title}</h3>
            <button className="edit-blog-btn" onClick={handleEditBlog}>Edit Blog</button>
            <button className="delete-blog-btn" onClick={handleDeleteBlog}>Delete Blog</button>
            {error && <div className='error-messages'>{error}</div>}
        </div>
    );
}

export default BlogProfileView;
