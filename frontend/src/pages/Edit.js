import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import icon from './img/icon.jpg';

const Edit = () => {
    const [image] = useState(icon);
    const [errors, setErrors] = useState([]);

    const handleImageClick = () => {
        document.getElementById('file-input').click();
    };

    const navigate = useNavigate();

    const returnHome = () => {
        navigate('/home'); 
    };

    const handleEdit = (event) => {
        event.preventDefault(); 

        let errors = [];

        const email = document.getElementById('email').value;
        const newPass = document.getElementById('newPass').value;
        const confirmNewPass = document.getElementById('confirmNew').value;
        const oldPass = document.getElementById('oldPass').value;

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (newPass !== confirmNewPass) {
            errors.push('New passwords do not match.');
        }

        if (email.length === 0 || newPass.length === 0 || confirmNewPass.length === 0 || oldPass.length === 0) {
            errors.push('All fields are required.');
        }

        if (!emailPattern.test(email)) {
            errors.push('Invalid email address.');
        }

        setErrors(errors);

    };

    return (
        <div className="edit-container">
            <div className="edit-content">
                <div className="image-container" onClick={handleImageClick}>
                    <img src={image} alt="Profile" />
                    <div className="overlay"></div>
                </div>
                <form className="edit-info" onSubmit={handleEdit}>
                    <input id="file-input" type="file" style={{ display: 'none' }} />
                    <label htmlFor='email'>Email</label>
                    <input type="text" className='email' id='email' />
                    <label htmlFor='newPass'>New Password</label>
                    <input type="password" className='newPass' id='newPass' />
                    <label htmlFor='confirmNew'>Confirm New Password</label>
                    <input type="password" className='confirmNew' id='confirmNew' />
                    <label htmlFor='bio'>Biography</label>
                    <input type="text" className='bio' id='bio' />
                    <hr/>
                    <label htmlFor='oldPass'>Confirm Old Password</label>
                    <input type="password" className='oldPass' id='oldPass' />
                    <div className="button-container">
                        <button type="submit" className="submit-button">Save Changes</button>
                        <button type="button" className="cancel-button" onClick={returnHome}>Cancel</button>
                    </div>
                    {errors.length > 0 && (
                        <div className="error-messages">
                            {errors.map((error, index) => (
                                <p key={index} className="error">{error}</p>
                            ))}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Edit;
