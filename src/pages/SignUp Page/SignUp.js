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
  const [Date, setDate] = useState("");
  const handleClick = () => {
    let data = { Name, Date, Email, Password };
    let userId = JSON.parse(localStorage.getItem("userId") || "1");
    data.id = userId;
    let user = JSON.parse(localStorage.getItem("user") || "[]");
    user.push(data);
    console.log(user);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("userId", JSON.stringify(userId + 1));
  };
  return (
    <div className={style.sss}>
      <div className={style.containerr} id="container">
        <div className={style.signUpContainer}>
          <form className={style.form1} action="#">
            <br></br>
            <h1 className={style.h1Sign}>Créer un compte</h1>
            <div className={style.socialContainerrr}>
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
            <span className={style.spanSign}>
              ou utilisez votre email pour vous inscrire
            </span>
            <input
              className={style.inputSign}
              type="text"
              placeholder="nom"
              onChange={(e) => setName(e.target.value)}
            />
            <div class="input-group date">
              <input
                type="date"
                className="form-control"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <input
              className={style.inputSign}
              type="email"
              placeholder="e-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className={style.inputSign}
              type="password"
              placeholder="mot de passe"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className={style.Quetion}>
              {" "}
              Qu'est-ce qui vous intéresse ?{" "}
            </div>
            <section className={style.radio_section}>
              <div className={style.radio_list}>
                <div className={style.radio_item}>
                  <input
                    className={style.input}
                    type="radio"
                    name="radio"
                    id="radio1"
                  />
                  <label className={style.label} htmlFor="radio1">
                    Comptabilité{" "}
                  </label>
                </div>
                <div className={style.radio_item}>
                  <input
                    className={style.input}
                    type="radio"
                    name="radio"
                    id="radio2"
                  />
                  <label className={style.label} htmlFor="radio2">
                    {" "}
                    Design
                  </label>
                </div>

                <div className={style.radio_item}>
                  <input
                    className={style.input}
                    type="radio"
                    name="radio"
                    id="radio4"
                  />
                  <label className={style.label} htmlFor="radio4">
                    {" "}
                    Sports
                  </label>
                </div>
              </div>
              <div className={style.radio_list}>
                <div className={style.radio_item}>
                  <input
                    className={style.input}
                    type="radio"
                    name="radio"
                    id="radio5"
                  />
                  <label className={style.label} htmlFor="radio5">
                    {" "}
                    Medecine{" "}
                  </label>
                </div>
                <div className={style.radio_item}>
                  <input
                    className={style.input}
                    type="radio"
                    name="radio"
                    id="radio3"
                  />
                  <label className={style.label} htmlFor="radio3">
                    {" "}
                    Developpement
                  </label>
                </div>
                <div className={style.radio_item}>
                  <input
                    className={style.input}
                    type="radio"
                    name="radio"
                    id="radio10"
                  />
                  <label className={style.label} htmlFor="radio10">
                    Other
                  </label>
                </div>
              </div>
            </section>
            <button className={style.buttonSign} onClick={handleClick}>
              <Link to="/SignIn">enregistrer</Link>
            </button>
          </form>
        </div>
        <div className={style.overlayContainer}>
          <div className={style.overlay}>
            <div className={style.overlayLeft}>
              <form action="/SignIn">
                <h1 className={style.h1Sign}>Content de vous revoir !</h1>
                <p>
                  Pour rester en contact avec nous, veuillez vous connecter avec
                  vos informations personnelles
                </p>
                <button
                  className={style.buttonGhost}
                  id="signIn"
                  onClick={() => navigate("/SignIn")}
                >
                  s'identifier
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
