import { useState } from 'react';

import IsLoggedInContext from '../../contexts/IsLoggedInContext.js';
import PopupContext from '../../contexts/PopupContext.js'

function AppProviders({children}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [popup, setPopup] = useState(null);
  
  return (
    <IsLoggedInContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
      <PopupContext.Provider value={{popup, setPopup}}>
        {children}
      </PopupContext.Provider> 
    </IsLoggedInContext.Provider>
  )
}

export default AppProviders;