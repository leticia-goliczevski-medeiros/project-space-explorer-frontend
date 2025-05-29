import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../../pages/Home.jsx';
import Register from '../../pages/Register.jsx';
import Login from '../../pages/Login.jsx';
import MyGallery from '../../pages/MyGallery.jsx';
import Explore from '../../pages/Explore.jsx';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.jsx';

function App() {

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
      </div>
    </div>
  )
}

export default App
