import { Link } from 'react-router-dom';
import { useState } from 'react';
import icon from './img/icon.jpg';
import { useNavigate } from 'react-router-dom';
import blogPic from './img/blog.jpg'

const Profile = () => {
    const [showFriendsList, setShowFriendsList] = useState(false);
    const navigate = useNavigate();

    const handleEdit = () => {
        navigate('/edit'); 
    };

    const handleNew = () => {
        navigate('/create');
    };

    const handleViewFriends = () => {
        setShowFriendsList(true);
    };

    const handleBackToProfile = () => {
        setShowFriendsList(false);
    };

    return (
        <div className="profile-container">
            {showFriendsList ? (
                <div className="friends-list-container">
                    <h2>Friends List</h2>
                    <div className="friends-list">
                        
                        <div className="friend-item">
                            <img src={icon} alt="friend" className="friend-image"/>
                            <p className="friend-name">Friend Name</p>
                            <button className="btn unfriend-btn">Unfriend</button>
                        </div>
                        <div className="friend-item">
                            <img src={icon} alt="friend" className="friend-image"/>
                            <p className="friend-name">Friend Name</p>
                            <button className="btn unfriend-btn">Unfriend</button>
                        </div>
                        <div className="friend-item">
                            <img src={icon} alt="friend" className="friend-image"/>
                            <p className="friend-name">Friend Name</p>
                            <button className="btn unfriend-btn">Unfriend</button>
                        </div>
                        <div className="friend-item">
                            <img src={icon} alt="friend" className="friend-image"/>
                            <p className="friend-name">Friend Name</p>
                            <button className="btn unfriend-btn">Unfriend</button>
                        </div>
                        <div className="friend-item">
                            <img src={icon} alt="friend" className="friend-image"/>
                            <p className="friend-name">Friend Name</p>
                            <button className="btn unfriend-btn">Unfriend</button>
                        </div>
                        <div className="friend-item">
                            <img src={icon} alt="friend" className="friend-image"/>
                            <p className="friend-name">Friend Name</p>
                            <button className="btn unfriend-btn">Unfriend</button>
                        </div>
                        <button className="btn back-btn" onClick={handleBackToProfile}>Back to Profile</button>

                    </div>
                </div>
            ) : (
                <div className="profile-settings">
                    <div className="redirection">
                        <p><Link to='/home'>Home</Link> / <Link to='/profile'>Profile</Link></p>
                    </div>
                    <div className='profile-main-details'>
                        <img src={icon} alt="profile-picture" className="profile-picture"/>
                        <h2>FULL NAME</h2>
                        <p className="profile-bio">BIO HERE</p>
                    </div>
                    <div className='profile-secondary-details'>
                        <div className="detail-item">
                            <label>Email</label>
                            <p>EMAIL HERE</p>
                        </div>
                        <div className="detail-item">
                            <label>Password</label>
                            <p>PASSWORD IN *</p>
                        </div>
                    </div>
                    <div className='profile-buttons'>
                        <button className="btn edit-btn" onClick={handleEdit}>Edit Account</button>
                        <button className="btn friends-btn" onClick={handleViewFriends}>View Friends List</button>
                    </div>
                </div>
            )}
            <div className='profile-activity'>
    <h1>Account Activity</h1>
    <button className="write-new-blog-btn" onClick={handleNew}>Write New Blog</button>
    <div className='blog-items-container'>
        <div className='blog-item'>
            <img src={blogPic} alt="default blog image"/>
            <h3>TITLE OF BLOG HERE</h3>
            <button className="edit-blog-btn">Edit Blog</button>
            <button className="delete-blog-btn">Delete Blog</button>
        </div>
        <div className='blog-item'>
            <img src={blogPic} alt="default blog image"/>
            <h3>TITLE OF BLOG HERE</h3>
            <button className="edit-blog-btn">Edit Blog</button>
            <button className="delete-blog-btn">Delete Blog</button>
        </div>
        <div className='blog-item'>
            <img src={blogPic} alt="default blog image"/>
            <h3>TITLE OF BLOG HERE</h3>
            <button className="edit-blog-btn">Edit Blog</button>
            <button className="delete-blog-btn">Delete Blog</button>
        </div>
        <div className='blog-item'>
            <img src={blogPic} alt="default blog image"/>
            <h3>TITLE OF BLOG HERE</h3>
            <button className="edit-blog-btn">Edit Blog</button>
            <button className="delete-blog-btn">Delete Blog</button>
        </div>
        <div className='blog-item'>
            <img src={blogPic} alt="default blog image"/>
            <h3>TITLE OF BLOG HERE</h3>
            <button className="edit-blog-btn">Edit Blog</button>
            <button className="delete-blog-btn">Delete Blog</button>
        </div>
        
    </div>
</div>

        </div>
    );
}

export default Profile;
