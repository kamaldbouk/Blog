import { Link } from 'react-router-dom';
import icon from './img/icon.jpg';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    
    const navigate = useNavigate();

    const handleEdit = () => {
        navigate('/edit'); 
    };

    return (
        <div className="profile-container">
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
                <button className="btn edit-btn" onClick={handleEdit} >Edit Account</button>
                <button className="btn friends-btn">View Friends List</button>
            </div>
        </div>
            
            <div className="profile-activity">

            </div>
        </div>
    );
}

export default Profile;
