import { useState } from 'react';
import logPic from './img/log-pic.png';
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isLoading } = useLogin();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    let errors = [];
    if (email.length === 0 || password.length === 0) {
      errors.push('All fields are required.');
    } else {
      if (email.length === 0) {
        errors.push('Please enter your email.');
      }
      if (password.length === 0) {
        errors.push('Please enter your password.');
      }
    }

    if (errors.length > 0) {
      return; 
    }

    try {
      const result = await login(email, password);

      if (result) {
        navigate('/home');
      }
    } catch (err) {
      console.log('Error from backend')
    }
  };

  return (
    <div className="login-container">
      <div className="login-all">
        <div className="log-info">
          <h1>Welcome back!</h1>
          <form className='login' onSubmit={handleLogin}>
            <label htmlFor="email">Email</label>
            <input
              className="email"
              type="text"
              id="email"
              placeholder='Enter your email here...'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              className="password"
              type="password"
              id="password"
              placeholder='Enter your password here...'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <button disabled={isLoading}>Login</button>
          </form>
          {(error || errors.length > 0) && (
            <div className="error-messages">
              {(errors.length > 0 ? errors : [error]).map((msg, index) => (
                <p key={index} className="error">{msg}</p>
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
};

export default Login;

