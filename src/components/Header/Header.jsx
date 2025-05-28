import './Header.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import UserNavigation from './UserNavigation/UserNavigation.jsx';
import AuthNavigation from './AuthNavigation/AuthNavigation.jsx';

import IsLoggedInContext from '../../contexts/IsLoggedInContext';

function Header() {
 const { isLoggedIn } = useContext(IsLoggedInContext);

  return (
    <header className='header'>
      <Link to="/" className='header__title'><h1>SPACE EXPLORER</h1></Link>

      <nav className='header__nav'>
        {isLoggedIn? <UserNavigation /> : <AuthNavigation />}
      </nav>
    </header>
  )
}

export default Header;