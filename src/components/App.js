import '../assets/css/App.css';
import '../assets/css/utilities.css'

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import RegistrationPage from '../pages/RegistrationPage'
import LoginPage from '../pages/LoginPage'
import ResortList from '../pages/ResortList'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/registration' element={<RegistrationPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/resort' element={<ResortList />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App
