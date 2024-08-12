import { useState } from 'react';
import logPic from './img/log-pic.png'; 
import { useSignup } from "../hooks/useSignup"

const Register = () => {

    const [errors, setErrors] = useState([]);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signup, error, isLoading} = useSignup()

    const handleRegister = async (e) => {

        let errors = [];

        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let pass = document.getElementById('password').value;
        let confirmPass = document.getElementById('confirmPass').value;

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (pass!==confirmPass){
            errors.push('Passwords do not match.');
        }

        if (name.length===0 || email.length===0 || pass.length===0 || confirmPass.length===0){
            errors.push('All fields are required.')
        }

        if (!emailPattern.test(email)) {
            errors.push('Invalid email address.')
        }

        setErrors(errors)

        if (errors.length===0){
            e.preventDefault()

            await signup(email, password)
        }
    }

    return (
        <div className="login-container">
            <div className="login-all">
                <div className="log-info">
                    <h1>Welcome!</h1>
                    <form className='signup' onSubmit={handleRegister}>
                        <label htmlFor="name">Name</label>
                        <input className="name" type="text" id="name" placeholder='Type your full name here...' />
                        <label htmlFor="email">Email</label>
                        <input className="email" type="text" id="email" placeholder='Type a valid email address here...' onChange={(e) => setEmail(e.target.value)} value={email} />
                        <label htmlFor="password">Password</label>
                        <input className="password" type="password" id="password" placeholder='Type your password here...' onChange={(e) => setPassword(e.target.value)} value={password} />
                        <label htmlFor="confirmPass">Confirm Password</label>
                        <input className="confirmPass" type="password" id="confirmPass" placeholder='Confirm your password here...' />
                        <button disabled={isLoading} >Sign Up</button>
                    </form>

                    {errors.length > 0 && (
                        <div className="error-messages">
                            {errors.map((error, index) => (
                                <p key={index} className="error">{error}</p>
                            ))}
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
