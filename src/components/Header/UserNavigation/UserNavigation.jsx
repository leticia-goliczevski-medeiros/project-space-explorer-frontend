import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import IsLoggedInContext from '../../../contexts/IsLoggedInContext';

function UserNavigation() {
  const { setIsLoggedIn } = useContext(IsLoggedInContext);

  const navigate = useNavigate();

  function handleUserLogout() {
    setIsLoggedIn(false);
    localStorage.removeItem("UserIdentifier");
    navigate("/");
  }

  return  (
    <>
      <Link to="/explore" className='header__navlink'>Explore</Link>
      <Link to="/mygallery" className='header__navlink'>My Gallery</Link>
      <Link to="/" className='header__navlink' onClick={handleUserLogout}>Logout</Link>
    </>
  )
}

export default UserNavigation;