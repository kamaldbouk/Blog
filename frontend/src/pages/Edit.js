import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import icon from './img/icon.jpg';

const Edit = () => {
    const [image, setImage] = useState(icon);

    const handleImageClick = () => {
        document.getElementById('file-input').click();
    };

    const navigate = useNavigate();

    const returnHome = () => {
        navigate('/home'); 
    };

    return (
        <div className="edit-container">
            <div className="edit-content">
                <div className="image-container" onClick={handleImageClick}>
                    <img src={image} alt="Profile" />
                    <div className="overlay"></div>
                </div>
                <form className="edit-info">
                <input id="file-input" type="file" style={{ display: 'none' }} />
                    <label htmlFor='email'>Email</label>
                    <input type="email" className='email' />
                    <label htmlFor='newPass'>New Password</label>
                    <input type="password" className='newPass' />
                    <label htmlFor='confirmNew'>Confirm New Password</label>
                    <input type="password" className='confirmNew' />
                    <label htmlFor='bio'>Biography</label>
                    <input type="text" className='bio' />
                    <hr/>
                    <label htmlFor='oldPass'>Confirm Old Password</label>
                    <input type="password" className='oldPass' />
                    <button type="submit" className="submit-button">Save Changes</button>
                    <button type="button" className="cancel-button" onClick={returnHome}>Cancel</button>
                </form>
            </div>
        </div>
    );
}

export default Edit;
