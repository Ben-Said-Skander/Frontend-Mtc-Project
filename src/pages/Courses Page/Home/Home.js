import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import CoursesList from "../CoursesList/CoursesList";
import Header from "../Header/Header";
import Search from "../Search Component/Search";
import { Link } from "react-router-dom";
import style from "./styles.module.css";
import Sidebar from "../../Student Sidebar/SideBar";
const HomeCourses = () => {
  const [courses, setCourses] = useState([
    {
      id: nanoid(),
      name: "JAVA",
      imageURL: "java.png",
    },
    {
      id: nanoid(),
      name: "Python",
      imageURL: "Python.png",
    },
    {
      id: nanoid(),
      name: "Math",
      imageURL: "math.webp",
    },
    {
      id: nanoid(),
      name: "Adobe",
      imageURL: "adobe.jpg",
    },
  ]);

  const [searchName, setSearchName] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedCourses = JSON.parse(
      localStorage.getItem("react-courses-app-data")
    );

    if (savedCourses) {
      setCourses(savedCourses);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-courses-app-data", JSON.stringify(courses));
  }, [courses]);

  const addCourse = (name) => {
    const newCourse = {
      id: nanoid(),
      name: name,
    };
    const newcourses = [...courses, newCourse];
    setCourses(newcourses);
  };

  const deleteCourse = (id) => {
    const newcourses = courses.filter((course) => course.id !== id);
    setCourses(newcourses);
  };

  return (
    <div>
      <Sidebar />
      <div className={`${style.darkMode && style.dark_mode}`}>
        <div className={style.container}>
          <Header handleToggleDarkMode={setDarkMode} />
          <br></br>
          <Search handleSearchCourse={setSearchName} className={style.search} />

      

          <h1 className={style.all}>All Courses</h1>
          <br></br>

          <Link to="/AllCourses">
            <button className={style.btn}>See All Courses</button>
          </Link>

          <br></br>
          <br></br>

          <CoursesList
            courses={courses.filter((course) =>
              course.name.toLowerCase().includes(searchName)
            )}
            handleAddCourse={addCourse}
            handleDeleteCourse={deleteCourse}
          />
        </div>
      </div>{" "}
    </div>
  );
};

export default HomeCourses;
