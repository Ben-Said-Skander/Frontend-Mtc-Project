import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
export default function SignIn() {
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [user, setuser] = useState([]);
  const [messagee, setMessage] = useState("");
  const handleClick = () => {
    let data = {
      Email: Email,
      Password: Password,
    };
    console.log(data);
    let user = JSON.parse(localStorage.getItem("user") || "[]");
    let message = "";
    for (let i = 0; i < user.length; i++) {
      if (user[i].Email === Email) {
        if (user[i].Password === Password) {
          message = "2";
          break;
        } else {
          message = "1";
          break;
        }
      } else {
        message = "0";
      }
    }
    console.log(message);
    setMessage(message);
  };
  return (
    <div className={style.sss}>
      <div className={style.containerr} id="container">
        <div className={style.signInContainer}>
          <form className={style.form1} action="#">
            <h1 className={style.h1Sign}>S'identifier</h1>
            <div className={style.socialContainerr}>
              <a href="#" className={style.social}>
                <FaFacebookF />
              </a>
              <a href="#" className={style.social}>
                <FaGooglePlusG />
              </a>
              <a href="#" className={style.social}>
                <FaLinkedinIn />
              </a>
            </div>
            <span className={style.spanSign}>ou utilisez votre compte</span>
            <input
              className={style.inputSign}
              type="email"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className={style.inputSign}
              type="password"
              placeholder="Mot de passe"
              onChange={(e) => setPassword(e.target.value)}
            />
            <a href="#">Mot de passe oublié?</a>
            <button className={style.buttonSign} onClick={handleClick}>
              s'identifier
            </button>
          </form>
        </div>
        <div className={style.overlayContainer}>
          <div className={style.overlay}>
            <div className={style.overlayRight}>
              <form action="/SignUp">
                <h1 className={style.h1Sign}>Salutations, cher participant</h1>
                <p>
                  Entrez vos données personnelles et commencez votre voyage avec
                  nous
                </p>
                <button className={style.buttonGhost} type="submit" id="signUp">
                  {" "}
                  <Link to="/Signup">Sign Up</Link>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
