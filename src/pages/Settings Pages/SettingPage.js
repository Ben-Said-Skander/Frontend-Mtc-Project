import React from "react";
import Nav from "../../components/nav";
import Profile from "./Pages/Profile";
import Password from "./Pages/PasswordPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Interests from "./Pages/InterestsPage";
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
