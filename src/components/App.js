import "./App.css";
import AddFiles from "./components/AddFiles";
import ListFiles from "./components/ListFiles";

import AddNotes from "./components/AddNotes.js/AddNotes";
import Notes from "./components/Notes/Notes";

import SignUp from "./components/SignUp";
import SignIn from "./components/signIn";

import SettingPage from "./components/SettingPage";
import Nav from "./components/Navbar";

import Profile from "./components/Profile";
import Password from "./components/PasswordPage";
import Interests from "./components/InterestsPage";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Nav />} />
          <Route path="/AddFiles" element={<AddFiles />} />
          <Route path="/ListFiles" element={<ListFiles />} />

          <Route path="/AddNotes" element={<AddNotes />} />
          <Route path="/Notes" element={<Notes />} />

          <Route path="/Signup" element={<SignUp />} />
          <Route path="/Signin" element={<SignIn />} />

          <Route path="/Settings" element={<Profile />} />
          <Route path="/Settings/Profile" element={<Profile />} />
          <Route path="/Settings/Password" element={<Password />} />
          <Route path="/Settings/Interests" element={<Interests />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
//package 1: npm install pdfjs-dist@2.15.349
//package 2: npm install @react-pdf-viewer/core@3.7.0
//package 3: npm i @react-pdf-viewer/default-layout
//package 4: npm i react-router-dom
//package 5: npm install bootstrap@5.3.0-alpha1
