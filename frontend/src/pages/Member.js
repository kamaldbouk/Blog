import BlogOutView from '../components/BlogOutView'
import icon from './img/icon.jpg'

const Member = () => {

    const isFriend = true;

    return ( 
        <div className="member-container">
            <div className="member-contents">
                <img src={icon} alt="icon" className="profile-icon"/>
                <h2>FULL NAME</h2>
                <p className="profile-bio">BIO HERE</p>
                <div className="friend-buttons">
                    {!isFriend ? (
                        <button className="add-friend-btn" >Add Friend</button>
                    ) : (
                        <button className="unfriend-btn">Unfriend</button>
                    )}
                </div>
                <h3>Account Activity</h3>
                <div className="blogs-container">
                    <BlogOutView />
                    <BlogOutView />
                    <BlogOutView />
                </div>
            </div>
        </div>
    )
}

export default Member
