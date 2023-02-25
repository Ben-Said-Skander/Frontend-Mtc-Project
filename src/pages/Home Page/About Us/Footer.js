import React from "react";
import Styles from "./Styles.module.css";
const Footer = () => {
  return (
    <div className={Styles.body}>
      <footer>
        <div className={Styles.contact}>
          <h6 classeName={Styles.h6}>Contactez-nous</h6>
          <p className={Styles.p}>
            Salut, nous sommes toujours ouverts à la coopération et aux
            suggestions,
            <br /> contactez-nous de l'une des manières ci-dessous
          </p>
          <div className={Styles.details}>
            <div className={Styles.div}>
              <p className={Styles.p}>numéro de téléphone</p>
              <span className={Styles.span}>
                <a className={Styles.a} href>
                  060-07-30
                </a>
              </span>
            </div>
            <div className={Styles.div}>
              <p className={Styles.p}>adresse e-mail</p>
              <span className={Styles.span}>
                <a className={Styles.a} href>
                  {" "}
                  us@example.com
                </a>
              </span>
            </div>
            <div className={Styles.div}>
              <p className={Styles.p}>Notre emplacement</p>
              <span className={Styles.span}>
                1 Nm Street,Sfax
                <br /> 101 TUN
              </span>
            </div>
            <div className={Styles.div}>
              <p className={Styles.p}>heures d'ouverture</p>
              <span className={Styles.span}>Lun-Sam 10h00-19h00</span>
            </div>
          </div>
        </div>
        <div className={Styles.information}>
          <h6 className={Styles.h6}>Information</h6>
          <p className={Styles.p}>Home</p>
          <p className={Styles.p}>Qui sommes nous</p>
          <p className={Styles.p}> contactez-nous</p>
          <p className={Styles.p}>returns</p>
          <p className={Styles.p}>site map</p>
        </div>
        <div className={Styles.account}>
          <h6 className={Styles.h6}>Mon compte</h6>
          <p className={Styles.p}>store </p>
          <p className={Styles.p}> history</p>
          <p className={Styles.p}>newsletter</p>
          <p className={Styles.p}>special offers</p>
          <p className={Styles.p}>gift certificates</p>
        </div>
        <div className={Styles.newsletter}>
          <h6 className={Styles.h6}>Lettre d'information</h6>
          <p className={Styles.p}>Rejoignez-nous sur notre site</p>
          <input
            className={Styles.input}
            type="email"
            name="email"
            placeholder="user@example.com"
          />
          <button className={Styles.button}>S'abonner </button>
          <p className={Styles.p}>Suivez-nous sur les réseaux sociaux</p>
          <a className={Styles.a} href>
            {" "}
            <i className={Styles.i} class="fa fa-facebook fa-2x"></i>
          </a>
          <a className={Styles.p} href>
            {" "}
            <i className={Styles.i} class="fa fa-twitter fa-2x"></i>
          </a>
          <a className={Styles.p} href>
            {" "}
            <i className={Styles.i} class="fa fa-youtube-play fa-2x"></i>
          </a>
          <a className={Styles.p} href>
            {" "}
            <i className={Styles.i} class="fa fa-instagram fa-2x"></i>
          </a>
        </div>
      </footer>
      <div className={Styles.footer_2}>
        <p className={Styles.p}>
          Copyright © 2023 – EDUCAT. Tous droits réservés
        </p>
      </div>
    </div>
  );
};

export default Footer;
