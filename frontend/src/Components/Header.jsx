import { NavLink,Link} from 'react-router-dom';
import '../styles/Header.css';

function Header(){
    return(
        <>
        <header>
            <ul>
            <li>
                <Link to="/" className='logo'>
                    AgriBot 
                </Link>
            </li>
            <li>
                <NavLink to="/" className='link' activeClassName="active">
                   DashBoard
                </NavLink>
            </li>
            <li>
                <NavLink to="/About" className='link' activeClassName="active">
                   About
                </NavLink>
            </li>
            </ul>
        </header>
        </>
    );
}

export default Header;