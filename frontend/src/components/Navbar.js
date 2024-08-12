import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { user, dispatch } = useAuthContext();
  const { logout } = useLogout();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout()
    dispatch({ type: 'LOGOUT' })
    navigate('/Home')
  };

  return (
    <header>
      <div className="navbar-container">
        <h1>BLOG NAME HERE</h1>
        <ul>
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          {user ? (
            <>
              <li><Link to='/create'>Write a Blog</Link></li>
              <li><Link to='/profile'>My Account</Link></li>
              <li><button onClick={handleLogout}>Logout</button></li>
            </>
          ) : (
            <li><Link to='/login'>Sign In/Up</Link></li>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
