import icon from '../pages/img/icon.jpg';

const FriendSingle = ({ name }) => {
    return (
        <div className="friend-item">
            <img src={icon} alt="friend" className="friend-image"/>
            <p className="friend-name">{name}</p>
            <button className="btn unfriend-btn">Unfriend</button>
        </div>   
    )
}

export default FriendSingle;
