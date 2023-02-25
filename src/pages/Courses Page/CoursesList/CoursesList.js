import Course from "../Course/Course";
import AddCourse from "../AddCourse/AddCourse";
import styles from "./styles.module.css";
const CoursesList = ({ courses, handleAddCourse, handleDeleteCourse }) => {
  return (
    <div className={styles.CoursesList}>
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
