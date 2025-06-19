import { Link } from 'react-router-dom';

function UserNavigation() {
  return  (
    <>
      <Link to="/explore" className='header__navlink'>Explore</Link>
      <Link to="/mygallery" className='header__navlink'>My Gallery</Link>
      <Link to="/" className='header__navlink'>Logout</Link>
    </>
  )
}

export default UserNavigation;