import blogPic from './img/blog.jpg'
import icon from './img/icon.jpg';

const Blog = () => {
    return (
        <div className="blog-container">
            <div className='blog-header'>
                <img src={blogPic} alt='Blog Header'/>
                <h1>TITLE HERE</h1>
                <h3>Published by: AUTHOR HERE <span className="secondary-text">13th of January 2024</span></h3> 
                <h4>DESCRIPTION HERE: Discover the beauty and benefits of urban gardening in this insightful blog. From rooftop gardens to small balcony setups, we explore innovative ways to bring greenery into city living. Learn about the best plants for limited spaces, tips for maintaining your garden, and the positive impact it can have on your well-being and the environment. Whether you're a seasoned gardener or a beginner, this guide will inspire you to transform your urban space into a green oasis.</h4>
            </div>
            <div className='blog-info'>
                <p>BLOG TEXT HERE: Urban gardening has become a rising trend as more people seek to incorporate nature into their city lives. With limited space, it may seem challenging to grow a thriving garden, but with creativity and the right approach, you can create a lush green sanctuary in the heart of the city. Here are some hidden gems and tips to help you get started:
                    1. Rooftop Gardens
                    If you have access to a rooftop, it can be an excellent place to start your urban garden. Rooftop gardens can accommodate a variety of plants, from vegetables to flowers. Ensure you have the right containers, quality soil, and a good irrigation system. Consider growing hardy plants like succulents, herbs, and small fruit trees.
                    2. Balcony Gardening
                    Balconies are another fantastic option for urban gardening. You can use pots, hanging baskets, and vertical planters to maximize space. Plants like cherry tomatoes, peppers, and herbs are perfect for balcony gardens. Make sure your plants receive enough sunlight and are protected from strong winds.
                    3. Indoor Gardening
                    For those with no outdoor space, indoor gardening is the way to go. Use windowsills, shelves, and even walls to place your plants. Choose low-maintenance plants like pothos, snake plants, and ZZ plants. These plants not only add greenery but also help purify the air.
                    4. Community Gardens
                    Join a community garden if you have limited space at home. These gardens provide a plot where you can grow your plants while also connecting with fellow gardeners. Community gardens often offer workshops and shared resources to help you succeed.
                    5. Vertical Gardens
                    Maximize your space by growing plants vertically. Use trellises, wall-mounted planters, or create a green wall with modular systems. Vertical gardening is ideal for growing herbs, leafy greens, and even strawberries.
                </p>
            </div>
            <div className='comment-section'>
                <div className='comment-header'>
                    <h3>Comment Section</h3>
                    <div className="vote-section">
                        <div className="vote-button upvote"></div>
                        <div className="vote-count">0</div>
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
                    <span>DISPLAY COMMENTS HERE</span>
                </p>
            </div>
            <div className='more-blogs'>
            </div>
        </div>
    )
}

export default Blog;
