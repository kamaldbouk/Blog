import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FriendsList from '../components/FriendsList';
import PersonalProfile from '../components/PersonalProfile';
import BlogProfileView from '../components/BlogProfileView';
import { useBlogsContext } from '../hooks/useBlogsContext';
import { useAuthContext } from '../hooks/useAuthContext';

const Profile = () => {
    const [showFriendsList, setShowFriendsList] = useState(false);
    const [friends, setFriends] = useState([]);
    const navigate = useNavigate();
    const { blogs } = useBlogsContext();
    const { user } = useAuthContext();


    const handleNew = () => {
        navigate('/create');
    };

    const handleViewFriends = async () => {
        setShowFriendsList(true);
        await fetchFriends();
    };

    const handleBackToProfile = () => {
        setShowFriendsList(false);
    };

    const fetchFriends = async () => {
    try {
        console.log('User:', user); 
        const response = await fetch(`/api/users/${user._id}/friends`);
        if (!response.ok) {
            throw new Error('Error');
        }
        const data = await response.json();
        setFriends(data);
    } catch (error) {
        console.error('Error fetching friends:', error);
    }
};

    
    const userBlogs = blogs ? blogs.filter(blog => blog.author === user.name) : [];

    return (
        <div className="profile-container">
            {showFriendsList ? (
                <FriendsList friends={friends} handleBackToProfile={handleBackToProfile} />
            ) : (
                <PersonalProfile
                    user={user}
                    handleViewFriends={handleViewFriends}
                />
            )}
            <div className='profile-activity'>
                <h1>Account Activity</h1>
                <button className="write-new-blog-btn" onClick={handleNew}>Write New Blog</button>
                <div className='blog-items-container'>
                    {userBlogs && userBlogs.map((blog) => (
                        <BlogProfileView key={blog._id} blog={blog} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Profile;
