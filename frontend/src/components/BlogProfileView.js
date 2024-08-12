import blogPic from '../pages/img/blog.jpg';
import { useNavigate } from 'react-router-dom';

const BlogProfileView = ({ blog }) => {
    const navigate = useNavigate();

    const handleEditBlog = (event) => {
        event.stopPropagation();
        navigate('/editblog');
    };

    const routeBlog = () => {
        navigate('/blog'); 
    };

    return (
        <div className='blog-item' onClick={routeBlog}>
            <img src={blogPic} alt="default blog image" />
            <h3>{blog.title}</h3>
            <button className="edit-blog-btn" onClick={handleEditBlog}>Edit Blog</button>
            <button className="delete-blog-btn">Delete Blog</button>
        </div>
    );
}

export default BlogProfileView;
