import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from "./style.module.css";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function SignUp() {
  const params = useParams();
  const navigate = useNavigate();
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const handleClick = () => {
    let data = { Name, Email, Password };
    let userId = JSON.parse(localStorage.getItem("userId") || "1");
    data.id = userId;
    let user = JSON.parse(localStorage.getItem("user") || "[]");
    user.push(data);
    console.log(user);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("userId", JSON.stringify(userId + 1));
  };
  return (

    <div className={style.sss} >
      <div className={style.containerr} id="container">
        <div className={style.signUpContainer}>
          <form className={style.form1} action="#">
            <h1 className={style.h1Sign}>Créer un compte</h1>
            <div className={style.socialContainerrr}>
              <a href="#" className={style.social}><FaFacebookF /></a>
              <a href="#" className={style.social}><FaGooglePlusG /></a>
              <a href="#" className={style.social}><FaLinkedinIn /></a>
            </div>
            <span className={style.spanSign}>ou utilisez votre email pour vous inscrire</span>
            <input className={style.inputSign} type="text" placeholder="nom" onChange={(e) => setName(e.target.value)}
            />
            <input className={style.inputSign} type="email" placeholder="e-mail" onChange={(e) => setEmail(e.target.value)}
            />
            <input className={style.inputSign} type="password" placeholder="mot de passe" onChange={(e) => setPassword(e.target.value)}
            />
            <button className={style.buttonSign}onClick={handleClick}><Link to="/SignIn">enregistrer</Link>
            </button>
          </form>
        </div>
        <div className={style.overlayContainer}>
          <div className={style.overlay}>
            <div className={style.overlayLeft}>
              <form action='/SignIn'>
                <h1 className={style.h1Sign}>Content de te revoir!</h1>
                <p>Pour rester en contact avec nous, veuillez vous connecter avec vos informations personnelles</p>
                <button className={style.buttonGhost} id="signIn" onClick={() => navigate("/SignIn")}
                >s'identifier</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}