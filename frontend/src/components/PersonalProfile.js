import { Link } from 'react-router-dom';
import icon from '../pages/img/icon.jpg';

const PersonalProfile = ({ user }) => {
    console.log('User data:', user);
 
    return (
        <div className="profile-settings">
            <div className="redirection">
                <p><Link to='/Home'>Home</Link> / <Link to='/profile'>Profile</Link></p>
            </div>
            <div className='profile-main-details'>
                <img src={icon} alt="profile-picture" className="profile-picture"/>
                <h2>{user.name}</h2>
                <p className="profile-bio">{user.bio}</p>
            </div>
            <div className='profile-secondary-details'>
                <div className="detail-item">
                    <label>Email</label>
                    <p>{user.email}</p>
                </div>
                <div className="detail-item">
                    <label>Password</label>
                    <p>********</p>
                </div>
            </div>
            
        </div>
    );
};

export default PersonalProfile;
