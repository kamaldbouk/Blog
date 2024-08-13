import FriendSingle from './FriendSingle';

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
            </div>
            <button className="btn back-btn" onClick={handleBackToProfile}>Back to Profile</button>
        </div>
    );
}

export default FriendsList;
