import Prof from "../Instructor/Instructor";

const Profs = ({ profs }) => {
  return (
    //affichage de la liste des profs
    <div className="profs-list">
      {profs.map((prof) => (
        <Prof
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

export default Profs;
