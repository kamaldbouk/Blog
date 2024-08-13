import lost from './img/lost.gif';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="error-page">
            <img src={lost} alt='Error Page'/>
            <h1>Lost? Return to <Link to='/home'>home</Link>.</h1>
        </div>
    )
}

export default Error