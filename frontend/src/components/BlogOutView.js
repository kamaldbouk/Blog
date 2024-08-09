import blogPic from '../pages/img/blog.jpg';
import { useNavigate } from 'react-router-dom';

const BlogOutView = ({ blog }) => {
    const navigate = useNavigate();

    const routeBlog = () => {
        navigate(`/blog/${blog._id}`);
    };

    const title = blog ? blog.title : 'No Title';
    const author = blog ? blog.author : 'Unknown Author';
    const date = blog ? blog.date : 'Unknown Date';

    return (
        <div className="blog-div" onClick={routeBlog}>
            <img src={blogPic} alt="Blog" className="blog-image" />
            <h3 className="blog-title">{title}</h3>
            <p className="blog-author">{author}</p>
            <p className="blog-date">{date}</p>
            <div className="blog-votes">
                <span className="upvote-button">▲</span>
                <span className="vote-count">123</span>
                <span className="downvote-button">▼</span>
            </div>
        </div>
    );
};

export default BlogOutView;
