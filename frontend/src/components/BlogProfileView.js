import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import blogPic from '../pages/img/blog.jpg';

const BlogProfileView = ({ blog }) => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);

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
                navigate('/home'); // Redirect to home or refresh the page
            }
        } catch (error) {
            setError('Failed to delete blog.');
            console.error('Error deleting blog:', error);
        }
    };

    return (
        <div className='blog-item' onClick={routeBlog}>
            <img src={blogPic} alt="default blog image" />
            <h3>{blog.title}</h3>
            <button className="edit-blog-btn" onClick={handleEditBlog}>Edit Blog</button>
            <button className="delete-blog-btn" onClick={handleDeleteBlog}>Delete Blog</button>
            {error && <div className='error-messages'>{error}</div>}
        </div>
    );
}

export default BlogProfileView;
