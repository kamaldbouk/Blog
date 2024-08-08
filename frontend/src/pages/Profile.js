import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import blogPic from './img/blog.jpg';
import FriendsList from '../components/FriendsList';
import PersonalProfile from '../components/PersonalProfile';

const Profile = () => {
    const [showFriendsList, setShowFriendsList] = useState(false);
    const navigate = useNavigate();

    const handleEdit = () => {
        navigate('/edit'); 
    };

    const handleNew = () => {
        navigate('/create');
    };

    const handleEditBlog = (event) => {
        event.stopPropagation();
        navigate('/editblog');
    };

    const routeBlog = () => {
        navigate('/blog'); 
    };

    const handleViewFriends = () => {
        setShowFriendsList(true);
    };

    const handleBackToProfile = () => {
        setShowFriendsList(false);
    };

    return (
        <div className="profile-container">
            {showFriendsList ? ( <FriendsList handleBackToProfile={handleBackToProfile} /> ) : (<PersonalProfile handleViewFriends={handleViewFriends} handleEdit={handleEdit} /> )}
            <div className='profile-activity'>
                <h1>Account Activity</h1>
                <button className="write-new-blog-btn" onClick={handleNew}>Write New Blog</button>
                <div className='blog-items-container'>
                    <div className='blog-item' onClick={routeBlog}>
                        <img src={blogPic} alt="default blog image"/>
                        <h3>TITLE OF BLOG HERE</h3>
                        <button className="edit-blog-btn" onClick={handleEditBlog}>Edit Blog</button>
                        <button className="delete-blog-btn">Delete Blog</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
