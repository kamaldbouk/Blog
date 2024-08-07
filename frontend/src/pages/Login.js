import { useState } from 'react';
import logPic from './img/log-pic.png'; 

const Login = () => {

    const [errors, setErrors] = useState([]);

    const handleLogin = () => {
        
        let errors = [];

        let email = document.getElementById('email').value;
        let pass = document.getElementById('password').value;



        if (email.length==0 && pass.length==0){
            errors.push('All fields are required.')
        }
        else {
            if (email.length==0){
                errors.push('Please enter your email.')
            }
            if (pass.length==0){
                errors.push('Please enter your password.')
            }
        }

        setErrors(errors); 

    }

    return (
        <div className="login-container">
            <div className="login-all">
                <div className="log-info">
                    <h1>Welcome back!</h1>
                    <label htmlFor="email">Email</label>
                    <input className="email" type="text" id="email" placeholder='Enter your email here...' />
                    <label htmlFor="password">Password</label>
                    <input className="password" type="password" id="password" placeholder='Enter your password here...' />
                    <button onClick={handleLogin}>Login</button>

                    {errors.length > 0 && (
                        <div className="error-messages">
                            {errors.map((error, index) => (
                                <p key={index} className="error">{error}</p>
                            ))}
                        </div>
                    )}

                    <p>Don't have an account? Sign up <a href="/register">here</a>.</p>
                </div>

                <div className="log-img">
                    <img src={logPic} alt="Login illustration" /> 
                </div>
            </div>
        </div>
    );
}

export default Login;
