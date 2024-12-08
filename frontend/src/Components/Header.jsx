import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

function Header(){
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return(
        <>
        <header>
            <ul>
            <li>
                <Link to="/" className={`logo`}>
                    AgriBot 
                </Link>
            </li>
            <li>
                <a href="/" className={`link ${isActive('/') ? 'active' : ''}`} target="_blank" rel="noopener noreferrer">
                   HomePage
                </a>
            </li>
            <li>
                <a href="/Dashboard" className={`link ${isActive('/Dashboard') ? 'active' : ''}`} target="_blank" rel="noopener noreferrer">
                    DashBoard
                </a>
            </li>
            <li>
                <a href="/About" className={`link ${isActive('/About') ? 'active' : ''}`} target="_blank" rel="noopener noreferrer">
                   About
                </a>
            </li>
            </ul>
        </header>
        </>
    );
}

export default Header;
