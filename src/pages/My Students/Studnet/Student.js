import style from "./styles.module.css";
const Student = ({ id, name, age, education, experience, contact }) => {
  return (
    <div className={style.container}>
      <div className={style.prof}>
        <center>
          <img
            src="instructor.jpg"
            alt="image"
            width="100px"
            className={style.img1}
          ></img>
        </center>

        <p className={style.p}>
          <b>Nom :</b>
          {name}
          <br></br>
          <b>Age : </b>
          {age}
          <br></br>
          <b>Education : </b> {education} <br></br>
          <b>Experience : </b>
          {experience} <br></br>
          <b>Contacte : </b>
          {contact} <br></br>
        </p>
      </div>
    </div>
  );
};

export default Student;
