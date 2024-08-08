import icon from '../pages/img/icon.jpg';
import FriendSingle from './FriendSingle'

const FriendsList = ({ handleBackToProfile }) => {
    return (
        <div className="friends-list-container">
            <h2>Friends List</h2>
            <div className='friends-list'>
                <FriendSingle />
                <FriendSingle />
                <FriendSingle />
                <FriendSingle />
                <FriendSingle />
            </div>
            <button className="btn back-btn" onClick={handleBackToProfile}>Back to Profile</button>
        </div>
    )
}

export default FriendsList;
