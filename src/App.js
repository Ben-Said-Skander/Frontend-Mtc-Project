import "./App.css";
import AddFiles from "./pages/AddFiles Page/AddFiles";
import ListFiles from "./pages/AddFiles Page/ListFiles";

import AddNotes from "./pages/Add Notes Page/AddNotes.js/AddNotes";
import Notes from "./pages/Add Notes Page/Notes/Notes";

import SignUp from "./pages/SignUp Page/SignUp";
import SignIn from "./pages/SignIn Page/SignIn";

import SettingPage from "./pages/Settings Pages/SettingPage";
//import Nav from "./components/Navbar";

import Profile from "./pages/Settings Pages/Pages/Profile";
import Password from "./pages/Settings Pages/Pages/PasswordPage";
import Interests from "./pages/Settings Pages/Pages/InterestsPage";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
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
