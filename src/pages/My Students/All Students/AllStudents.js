import Studnet from "../../My Students/Studnet/Student";
import "./AllStudents.css";
const AllStudnets = ({ profs }) => {
  return (
    //affichage de la liste des profs
    <div className="profs-list">
      {profs.map((prof) => (
        <Studnet
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

export default AllStudnets;
