import "./App.css";
import { Socket } from "socket.io-client";
import AddFiles from "./pages/AddFilesPage/AddFiles";
import ListFiles from "./pages/AddFilesPage/ListFiles";
import HomeCourses from "./pages/Courses Page/Home/Home";
import AllCourses from "./pages/Courses Page/AllCourses/AllCourses";
import CoursesList from "./pages/Courses Page/CoursesList/CoursesList";
import SignUp from "./pages/SignUp Page/SignUp";
import SignIn from "./pages/SignIn Page/SignIn";
import Profile from "./pages/Settings Pages/Pages/Profile";
import Password from "./pages/Settings Pages/Pages/PasswordPage";
import Interests from "./pages/Settings Pages/Pages/InterestsPage";
import Notes from "./pages/Add Notes Page/Notes/Notes";
import AddNotes from "./pages/Add Notes Page/AddNotes.js/AddNotes";
import AboutUs from "./pages/Home Page/About Us/AboutUs";
import TeacherSidebar from "./components/Teacher Sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//import Homechat from "./pages/ChatPage/Homechat";
//import ChatPage from "./pages/ChatPage/ChatPage";
//const socket = socketIO.connect("http://localhost:4000");
import Home from "./pages/Home Page/Home/Home";
import TeacherDashboard from "./pages/Teacher Dashbord/Dahsbord";
import RightSidebar from "./components/Right Sidebar/Sidebar";
import Demands from "./pages/Teacher Student connection/All Demands/demands";
import AllTeachers from "./pages/My Teachers/Teachers List/TeachersList"
import StudentList from "./pages/My Students/StudentList/StudentList"
import Calendrier from "./pages/Calendrier/Calendrier";

function App() {
  return (
    <div className="body">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/Signup" element={<SignUp />} />
          <Route path="/Signin" element={<SignIn />} />

          <Route path="/Profile" element={<Profile />} />
          <Route path="/Password" element={<Password />} />
          <Route path="/Interests" element={<Interests />} />
          <Route path="/AboutUs" element={<AboutUs />} />

          <Route path="/Dashbord" element={<HomeCourses />} />
          <Route path="/AllCourses" element={<AllCourses />} />
          <Route path="/CoursesList" element={<CoursesList />} />

          <Route path="/Notes" element={<Notes />} />
          <Route path="/AddNotes" element={<AddNotes />} />

          <Route path="/Calendrier" element={<Calendrier />} />

          <Route path="/TeacherDashboard" element={<TeacherDashboard />} />
          <Route path="/Demands" element={<Demands />} />

          <Route path="/RightSidebar" element={<RightSidebar />} />
          <Route path="/TeacherSidebar" element={<TeacherSidebar />} />
          <Route path="/AllTeachers" element={<AllTeachers />} />
          <Route path="/AllStudents" element={<StudentList />} />

          <Route path="/AddFiles" element={<AddFiles />} />
          <Route path="/ListFiles" element={<ListFiles />} />

          <Route path="/Calendrier" element={<Calendrier />} />
        </Routes>
      </Router>
    </div>
  );
}
/*
          <Route path="/Homechat" element={<Homechat socket={socket} />} />
          <Route path="/Chat" element={<ChatPage socket={socket} />} />
                 
*/
export default App;
