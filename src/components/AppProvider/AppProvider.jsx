import { useState } from 'react';

import IsLoggedInContext from '../../contexts/IsLoggedInContext.js';
import PopupContext from '../../contexts/PopupContext.js';
import PhotosContext from '../../contexts/PhotosContext.js';
import IsGalleryLoadingContext from '../../contexts/IsGalleryLoadingContext.js';

function AppProviders({children}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [popup, setPopup] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [myPhotos, setMyPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [IsGalleryLoading, setIsGalleryLoading] = useState(false);
  const [error, setError] = useState('');
  
  return (
    <IsLoggedInContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
      <PopupContext.Provider value={{popup, setPopup}}>
        <PhotosContext.Provider value={{photos, setPhotos, isLoading, setIsLoading, error, setError, myPhotos, setMyPhotos}}>
          <IsGalleryLoadingContext.Provider value={{IsGalleryLoading, setIsGalleryLoading}}>
            {children}
          </IsGalleryLoadingContext.Provider>
        </PhotosContext.Provider>
      </PopupContext.Provider> 
    </IsLoggedInContext.Provider>
  )
}

export default AppProviders;