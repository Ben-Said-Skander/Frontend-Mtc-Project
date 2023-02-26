import Course from "../Course/Course";
import AddCourse from "../AddCourse/AddCourse";
import "./CoursesList.css";
const CoursesList = ({ courses, handleAddCourse, handleDeleteCourse }) => {
  return (
    <div className="courses-list">
      {courses.map((course) => (
        <Course
          id={course.id}
          name={course.name}
          img={course.img}
          handleDeleteCourse={handleDeleteCourse}
        />
      ))}
      <AddCourse handleAddCourse={handleAddCourse} />
    </div>
  );
};

export default CoursesList;
