import logPic from './img/log-pic.png'; 

const Login = () => {

    const handleLogin = () => {
        
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
                    <button onclick={handleLogin}>Login</button>
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
