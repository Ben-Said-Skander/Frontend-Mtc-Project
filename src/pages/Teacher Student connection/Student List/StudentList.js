import Student from "../Student/Student";
import "./StudentList.css";
const StudentList = ({ profs }) => {
  return (
    //affichage de la liste des profs
    <div className="profs-list">
      {profs.map((prof) => (
        <Student
          id={prof.id}
          name={prof.name}
          age={prof.age}
          education={prof.education}
          experience={prof.experience}
          contact={prof.contact}
        />
      ))}
    </div>
  );
};

export default StudentList;
