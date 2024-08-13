import { useNavigate } from 'react-router-dom';
import PersonalProfile from '../components/PersonalProfile';
import BlogProfileView from '../components/BlogProfileView';
import { useBlogsContext } from '../hooks/useBlogsContext';
import { useAuthContext } from '../hooks/useAuthContext';

const Profile = () => {
  
    const navigate = useNavigate();
    const { blogs } = useBlogsContext();
    const { user } = useAuthContext();


    const handleNew = () => {
        navigate('/create');
    };

    
    const userBlogs = blogs ? blogs.filter(blog => blog.author === user.name) : [];

    return (
        <div className="profile-container">

                <PersonalProfile user={user}/>
        
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
