import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FriendsList from '../components/FriendsList';
import PersonalProfile from '../components/PersonalProfile';
import BlogProfileView from '../components/BlogProfileView';
import { useBlogsContext } from '../hooks/useBlogsContext';
import { useAuthContext } from '../hooks/useAuthContext';

const Profile = () => {
    const [showFriendsList, setShowFriendsList] = useState(false);
    const navigate = useNavigate();
    const { blogs } = useBlogsContext();
    const { user } = useAuthContext();

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

    const userBlogs = blogs ? blogs.filter(blog => blog.userId === user._id) : [];

    return (
        <div className="profile-container">
            {showFriendsList ? ( <FriendsList handleBackToProfile={handleBackToProfile} /> ) : (<PersonalProfile handleViewFriends={handleViewFriends} handleEdit={handleEdit} /> )}
            <div className='profile-activity'>
                <h1>Account Activity</h1>
                <button className="write-new-blog-btn" onClick={handleNew}>Write New Blog</button>
                <div className='blog-items-container'>
                    {userBlogs && userBlogs.map((blog) => (
                        <BlogProfileView key={blog._id} blog={blog} />
                    ))}
                    {/* <div className='blog-item' onClick={routeBlog}>
                        <img src={blogPic} alt="default blog image"/>
                        <h3>TITLE OF BLOG HERE</h3>
                        <button className="edit-blog-btn" onClick={handleEditBlog}>Edit Blog</button>
                        <button className="delete-blog-btn">Delete Blog</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Profile;
