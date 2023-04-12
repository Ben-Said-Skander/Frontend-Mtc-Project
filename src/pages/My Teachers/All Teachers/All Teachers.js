import Student from "../../My Students/Studnet/Student";
import "./AllTeachers.css";
const Students = ({ profs }) => {
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

export default Students;
