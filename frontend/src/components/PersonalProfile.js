import icon from '../pages/img/icon.jpg';

const PersonalProfile = ({ handleEdit, handleViewFriends }) => {

    return (
        <div className="profile-settings">
            <div className="redirection">
                <p><a href='/home'>Home</a> / <a href='/profile'>Profile</a></p>
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
    )
}

export default PersonalProfile;
