import { useState } from 'react';

import IsLoggedInContext from '../../contexts/IsLoggedInContext.js';
import PopupContext from '../../contexts/PopupContext.js'
import PhotosContext from '../../contexts/PhotosContext.js';

function AppProviders({children}) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [popup, setPopup] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  return (
    <IsLoggedInContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
      <PopupContext.Provider value={{popup, setPopup}}>
        <PhotosContext.Provider value={{photos, setPhotos, isLoading, setIsLoading, error, setError}}>
          {children}
        </PhotosContext.Provider>
      </PopupContext.Provider> 
    </IsLoggedInContext.Provider>
  )
}

export default AppProviders;