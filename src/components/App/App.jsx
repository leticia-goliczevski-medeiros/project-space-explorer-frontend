import './App.css';
import { useState, useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../../pages/Home.jsx';
import Register from '../../pages/Register.jsx';
import Login from '../../pages/Login.jsx';
import MyGallery from '../../pages/MyGallery.jsx';
import Explore from '../../pages/Explore.jsx';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.jsx';
import Popup from '../Main/Popup/Popup.jsx';

import PopupContext from '../../contexts/PopupContext.js';
import RegistrationPopup from '../Main/Popup/RegistrationPopup/RegistrationPopup.jsx';
import RegistrationErrorPopup from '../Main/Popup/RegistrationErrorPopup/RegistrationErrorPopup.jsx';

function App() {
  const { popup, setPopup } = useContext(PopupContext);

  // useEffect(()=> {
  //   let registrationPopup = {children: <RegistrationPopup />, registration: true}
  //   setPopup(registrationPopup);
  // }, [setPopup])

  return (
    <div className="App">
      <div className="page">
        <Routes>
          <Route path="/" element={
            <Home />
          } />
          <Route path="/signup" element={
            <Register />
          } />
          <Route path="/signin" element={
            <Login />
          } />
          <Route path="/mygallery" element={
            <ProtectedRoute>
              <MyGallery />
            </ProtectedRoute>
          } />
          <Route path="/explore" element={
            <ProtectedRoute>
              <Explore />
            </ProtectedRoute>
          } />
        </Routes>

        {popup && <Popup>{popup.children}</Popup>}
      </div>
    </div>
  )
}

export default App
