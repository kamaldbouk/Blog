import { useNavigate } from 'react-router-dom';
import Technology from '../pages/img/Technology.jpg'
import Lifestyle from '../pages/img/Lifestyle.jpg'
import Travel from '../pages/img/Travel.jpg'
import Food from '../pages/img/Food.jpg'
import Education from '../pages/img/Education.jpg'
import Health from '../pages/img/Health.jpg'
import Entertainment from '../pages/img/Entertainment.jpg'
import Sports from '../pages/img/Sports.jpg'
import DefaultImage from '../pages/img/blog.jpg';

const BlogOutView = ({ blog }) => {
    const navigate = useNavigate();

    const routeBlog = () => {
        navigate(`/blog/${blog._id}`);
    };

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

    const title = blog ? blog.title : 'No Title';
    const author = blog ? blog.author : 'Unknown Author';
    const date = blog ? new Date(blog.createdAt).toLocaleDateString() : 'Unknown Date';
    const category = blog ? blog.category : 'Other';
    const votes = blog.total;

    const imageSrc = categoryImages[category] || DefaultImage;

    return (
        <div className="blog-div" onClick={routeBlog}>
            <img src={imageSrc} alt={category} className="blog-image" />
            <div className="blog-content">
                <div className="blog-header1">
                    <h3 className="blog-title">{title}</h3>
                    <p className='blog-category'>{category}</p>
                </div>
                <p className="blog-author">{author}</p>
                <p className="blog-date">{date}</p>
                <div className="blog-votes">
                    <span className="upvote-button">▲</span>
                    <span className="vote-count">{votes}</span>
                    <span className="downvote-button">▼</span>
                </div>
            </div>
        </div>
    );
};

export default BlogOutView;
