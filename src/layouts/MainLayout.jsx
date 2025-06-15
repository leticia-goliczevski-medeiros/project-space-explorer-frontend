import { useContext } from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';

import IsLoggedInContext from '../contexts/IsLoggedInContext';

import heroVideo from '../images/earth.mp4';

function MainLayout({ children }){
  const { isLoggedIn } = useContext(IsLoggedInContext);
  const location = useLocation();

  const showWelcomeSection = location.pathname === '/' && !isLoggedIn;

  return (
    <>
    {showWelcomeSection &&
      <div className="welcome-video-wrapper">
         <video
          autoPlay
          muted
          loop
          playsInline
          className="welcome-section__background-video"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>
    }
      <Header />
        {children} 
      <Footer />
    </>
  )
}

export default MainLayout;