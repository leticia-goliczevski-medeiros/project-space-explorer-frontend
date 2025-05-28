import { Link } from 'react-router-dom';

function AuthNavigation() {
  return  (
    <>
      <Link to="/signup" className='header__navlink'>Register</Link>
      <Link to="/signin" className='header__navlink'>Login</Link>
    </>
  )
}

export default AuthNavigation;