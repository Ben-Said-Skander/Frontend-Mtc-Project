import styles from "./styles.module.css";

const Prof = ({ id, name, age, education, experience, contact }) => {
  return (
    <div className="prof">
      <center>
        <img src="prof.jpeg" alt="image" width="100px" className="img1"></img>
      </center>
      <center>
        <h3 className="name">{name}</h3>
      </center>
      <p>
        <b>Age: </b>
        {age}
        <br></br>
        <b>Education: </b> {education} <br></br>
        <b>Experience: </b>
        {experience} <br></br>
        <b>Contact : </b>
        {contact} <br></br>
      </p>
    </div>
  );
};

export default Prof;
