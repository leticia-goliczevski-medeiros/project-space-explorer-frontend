import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <Link to="/" className='header__title'><h1>SPACE EXPLORER</h1></Link>

    </header>
  )
}

export default Header;