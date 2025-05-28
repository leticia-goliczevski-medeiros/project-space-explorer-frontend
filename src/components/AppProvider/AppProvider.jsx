import { useState } from 'react';

import IsLoggedInContext from '../../contexts/IsLoggedInContext.js';

function AppProviders({children}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <IsLoggedInContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
      {children}
    </IsLoggedInContext.Provider>
  )
}

export default AppProviders;