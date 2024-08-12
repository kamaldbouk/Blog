import icon from '../pages/img/icon.jpg';
import FriendSingle from './FriendSingle'

const FriendsList = ({ friends, handleBackToProfile }) => {
    return (
        <div className="friends-list-container">
            <h2>Friends List</h2>
            <div className='friends-list'>
                {friends.length > 0 ? (
                    friends.map(friend => (
                        <FriendSingle 
                            key={friend._id} 
                            name={friend.email} 
                        />
                    ))
                ) : (
                    <p>No friends found.</p>
                )}

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
