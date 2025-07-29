import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import IsLoggedInContext from '../../../contexts/IsLoggedInContext';
import CurrentUserContext from '../../../contexts/CurrentUserContext';

function UserNavigation() {
  const { setIsLoggedIn } = useContext(IsLoggedInContext);
  const { setCurrentUser } = useContext(CurrentUserContext);

  const navigate = useNavigate();

  function handleUserLogout() {
    setIsLoggedIn(false);
    localStorage.removeItem("UserIdentifier");
    setCurrentUser({});
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