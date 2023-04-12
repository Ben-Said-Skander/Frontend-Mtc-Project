import style from "./styles.module.css";
const Student = ({ id, name, age, education, contact }) => {
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
         
          <b>Contacte : </b>
          {contact} <br></br>
        </p>

        <div>
          <button className={style.btnAccept}>Accepter</button>
          <button className={style.btnRefuse}>Refuser</button>
        </div>
      </div>
    </div>
  );
};

export default Student;
