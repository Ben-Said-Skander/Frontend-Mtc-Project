import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";

const Course = ({ id, name, handleDeleteCourse }) => {
  return (
    <div className="course">
      <table>
        <tr>
          <td>
            <span>
              <b className="name">{name}</b>
            </span>
          </td>
          <td>
            <div className="course-delete">
              <MdDeleteForever
                onClick={() => handleDeleteCourse(id)}
                className="delete-icon"
                size="1em"
              />
            </div>
          </td>
        </tr>
      </table>

      <div>
        <Link to="CoursProfs">
          <center>
            <img src="img2.webp" alt="image" className="coursImg"></img>
          </center>
        </Link>
      </div>
    </div>
  );
};

export default Course;
