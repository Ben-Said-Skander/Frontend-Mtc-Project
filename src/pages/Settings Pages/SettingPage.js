import React from 'react'
import Nav from './Nav';
import Profile from './Profile';
import Password from './Password';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Interests from './Interests';
const SettingPage = () => {
  return (
    <div>
       < BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="password" element={<Password/>} />
          <Route path="interests" element={<Interests/>} />
          </Routes>
      </BrowserRouter>

    </div>
  )
}

export default SettingPage
