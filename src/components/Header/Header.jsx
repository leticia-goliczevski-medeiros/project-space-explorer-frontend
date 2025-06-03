import './Header.css';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import menuIcon from '../../images/menu-icon.png';
import closeIcon from '../../images/close-icon.png';

import UserNavigation from './UserNavigation/UserNavigation.jsx';
import AuthNavigation from './AuthNavigation/AuthNavigation.jsx';

import IsLoggedInContext from '../../contexts/IsLoggedInContext';

function Header() {
 const { isLoggedIn } = useContext(IsLoggedInContext);
 const [ isMenuOpen, setIsMenuOpen ] = useState(false);

  return (
    <header className='header'>
      <div className="header__navbar">
        <Link to="/" className='header__title'><h1>SPACE EXPLORER</h1></Link>

        <nav className='header__links header__links_desktop'>
          {isLoggedIn? <UserNavigation /> : <AuthNavigation />}
        </nav>

        <button className='header__menu-button' onClick={()=> setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen? 
            <img src={closeIcon} alt="Close icon." className="header__menu-icon" /> 
            : 
            <img src={menuIcon} alt="Menu icon." className="header__menu-icon" />
          }
        </button>
      </div>

      {isMenuOpen && (
        <nav className='header__links header__links_mobile'>
          {isLoggedIn? <UserNavigation /> : <AuthNavigation />}
        </nav>
      )}
    </header>
  )
}

export default Header;