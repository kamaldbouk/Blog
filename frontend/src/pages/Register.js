import logPic from './img/log-pic.png'; 

const Register = () => {

    const handleRegister = () => {

    }

    return (
        <div className="login-container">
            <div className="login-all">
                <div className="log-info">
                    <h1>Welcome!</h1>
                    <label htmlFor="name">Name</label>
                    <input className="name" type="text" id="name" placeholder='Type your full name here...' />
                    <label htmlFor="email">Email</label>
                    <input className="email" type="text" id="email" placeholder='Type a valid email address here...' />
                    <label htmlFor="password">Password</label>
                    <input className="password" type="password" id="password" placeholder='Type your password here...' />
                    <label htmlFor="confirmPass">Confirm Password</label>
                    <input className="confirmPass" type="password" id="confirmPass" placeholder='Confirm your password here...' />
                    <button onClick={handleRegister}>Sign Up</button>
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
