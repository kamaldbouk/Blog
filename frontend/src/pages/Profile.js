import { Link } from 'react-router-dom';
import { useState } from 'react';
import icon from './img/icon.jpg';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const [showFriendsList, setShowFriendsList] = useState(false);
    const navigate = useNavigate();

    const handleEdit = () => {
        navigate('/edit'); 
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
        </div>
    );
}

export default Profile;
