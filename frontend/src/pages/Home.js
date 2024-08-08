import blogPic from './img/blog.jpg'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    
    const navigate = useNavigate();

    const routeBlog = () => {
        navigate('/blog'); 
    };

    return (
        <div className="home-container">
            <div className="popular-container">
                {/* sort these by number of likes (only top 6) */}
                <h2>Popular Blogs</h2>
    
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

            </div>

            <div className="all-container">
                <div className="filter-container">
                    <h2>All Blogs</h2>
                    <div className="filter-options">
                        <label htmlFor="filter-select">Filter</label>
                        <select id="filter-select">
                            <option value="">Select an option</option>
                            <option value="technology">Technology</option>
                            <option value="lifestyle">Lifestyle</option>
                            <option value="travel">Travel</option>
                            <option value="food">Food</option>
                            <option value="education">Education</option>
                            <option value="health">Health</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="sports">Sports</option>
                        </select>
                    </div>
                </div>
                
                <div className="blogs-list">

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
                </div>
                

            </div>
        </div>
    );
};

export default Home;
