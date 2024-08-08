import BlogOutView from '../components/BlogOutView'
import icon from './img/icon.jpg'

const Member = () => {
    return ( 
        <div className="member-container">
            <div className="member-contents">
                <img src={icon} alt="icon" className="profile-icon"/>
                <h2>FULL NAME</h2>
                <p className="profile-bio">BIO HERE</p>
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
