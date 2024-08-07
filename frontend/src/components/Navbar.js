import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <div className="navbar-container">
                <h1>BLOG NAME HERE</h1>
                <ul>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/login'>Sign In/Up</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar