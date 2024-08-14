import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import logPic from './img/log-pic.png'; 
import { useSignup } from "../hooks/useSignup";

const Register = () => {
    const [errors, setErrors] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { signup, error, isLoading } = useSignup();
    const navigate = useNavigate(); 

    const handleRegister = async (e) => {
        e.preventDefault();
        let errors = [];

        // Validate that passwords match
        if (password !== confirmPassword) {
            errors.push('Passwords do not match.');
        }

        // Validate that all fields are filled
        if (name.length === 0 || email.length === 0 || password.length === 0 || confirmPassword.length === 0) {
            errors.push('All fields are required.');
        }

        // Validate email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            errors.push('Invalid email address.');
        }

        // Validate password strength
        const passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
        if (!passwordPattern.test(password)) {
            errors.push('Password must be at least 8 characters long, contain at least one uppercase letter, and one special character.');
        }

        setErrors(errors);

        if (errors.length === 0) {
            try {
                await signup(name, email, password);
                navigate('/home'); 
            } catch (error) {
                // Handle the signup error here if needed
            }
        }
    }

    return (
        <div className="login-container">
            <div className="login-all">
                <div className="log-info">
                    <h1>Welcome!</h1>
                    <form className='signup' onSubmit={handleRegister}>
                        <label htmlFor="name">Name</label>
                        <input
                            className="name"
                            type="text"
                            id="name"
                            placeholder='Type your full name here...'
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            className="email"
                            type="text"
                            id="email"
                            placeholder='Type a valid email address here...'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <label htmlFor="password">Password</label>
                        <input
                            className="password"
                            type="password"
                            id="password"
                            placeholder='Type your password here...'
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                        <label htmlFor="confirmPass">Confirm Password</label>
                        <input
                            className="confirmPass"
                            type="password"
                            id="confirmPass"
                            placeholder='Confirm your password here...'
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            value={confirmPassword}
                        />
                        <button disabled={isLoading}>Sign Up</button>
                    </form>

                    {errors.length > 0 && (
                        <div className="error-messages">
                            {errors.map((error, index) => (
                                <p key={index} className="error">{error}</p>
                            ))}
                        </div>
                    )}

                    {error && (
                        <div className="error-messages">
                            <p className="error">{error}</p>
                        </div>
                    )}

                    <p>Already have an account? Sign in <a href="/login">here</a>.</p>
                </div>
                <div className="log-img">
                    <img src={logPic} alt="Login illustration" /> 
                </div>
            </div>
        </div>
    );
}

export default Register;
