import blogPic from '../pages/img/blog.jpg'
import { useNavigate } from 'react-router-dom';

const BlogOutView = () => {

    const navigate = useNavigate();

    const routeBlog = () => {
        navigate('/blog'); 
    };

    const upvote = (event) => {
        event.stopPropagation();

    }

    return (
        <div className="blog-div" onClick={routeBlog}>
            <img src={blogPic} alt="Blog" className="blog-image" />
            <h3 className="blog-title">Blog Title</h3>
            <p className="blog-author">Author Name</p>
            <p className="blog-date">Date</p>
            <div className="blog-votes">
                <span className="upvote-button">▲</span>
                <span className="vote-count">123</span>
                <span className="downvote-button">▼</span>
            </div>
        </div>
    )
}

export default BlogOutView