import React from "react";
import Nav from "../Navbar";
import Profile from "./Profile";
import Password from "./PasswordPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Interests from "./InterestsPage";
const SettingPage = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/Settings/Profile" element={<Profile />} />
          <Route path="/Settings/Proassword" element={<Password />} />
          <Route path="/Settings/Interests" element={<Interests />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default SettingPage;
