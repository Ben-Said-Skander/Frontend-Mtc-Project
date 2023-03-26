import React from "react";
import styles from "./styles.module.css";
const Footer = () => {
  return (
    <div className={styles.body}>
      <footer>
        <div className={styles.contact}>
          <h6 classeName={styles.h6}>Contactez-nous</h6>
          <p className={styles.p}>
            Salut, nous sommes toujours ouverts à la coopération et aux
            suggestions,
            <br /> contactez-nous de l'une des manières ci-dessous
          </p>
          <div className={styles.details}>
            <div className={styles.div}>
              <p className={styles.p}>numéro de téléphone</p>
              <span className={styles.span}>
                <a className={styles.a} href>
                  060-07-30
                </a>
              </span>
            </div>
            <div className={styles.div}>
              <p className={styles.p}>adresse e-mail</p>
              <span className={styles.span}>
                <a className={styles.a} href>
                  {" "}
                  us@example.com
                </a>
              </span>
            </div>
            <div className={styles.div}>
              <p className={styles.p}>Notre emplacement</p>
              <span className={styles.span}>
                1 Nm Street,Sfax
                <br /> 101 TUN
              </span>
            </div>
            <div className={styles.div}>
              <p className={styles.p}>heures d'ouverture</p>
              <span className={styles.span}>Lun-Sam 10h00-19h00</span>
            </div>
          </div>
        </div>
        <div className={styles.information}>
          <h6 className={styles.h6}>Information</h6>
          <p className={styles.p}>Home</p>
          <p className={styles.p}>Qui sommes nous</p>
          <p className={styles.p}> contactez-nous</p>
          <p className={styles.p}>returns</p>
          <p className={styles.p}>site map</p>
        </div>
        <div className={styles.account}>
          <h6 className={styles.h6}>Mon compte</h6>
          <p className={styles.p}>store </p>
          <p className={styles.p}> history</p>
          <p className={styles.p}>newsletter</p>
          <p className={styles.p}>special offers</p>
          <p className={styles.p}>gift certificates</p>
        </div>
        <div className={styles.newsletter}>
          <h6 className={styles.h6}>Lettre d'information</h6>
          <p className={styles.p}>Rejoignez-nous sur notre site</p>
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="user@example.com"
          />
          <button className={styles.button}>S'abonner </button>
          <p className={styles.p}>Suivez-nous sur les réseaux sociaux</p>
          <a className={styles.a} href>
            {" "}
            <i className={styles.i} class="fa fa-facebook fa-2x"></i>
          </a>
          <a className={styles.p} href>
            {" "}
            <i className={styles.i} class="fa fa-twitter fa-2x"></i>
          </a>
          <a className={styles.p} href>
            {" "}
            <i className={styles.i} class="fa fa-youtube-play fa-2x"></i>
          </a>
          <a className={styles.p} href>
            {" "}
            <i className={styles.i} class="fa fa-instagram fa-2x"></i>
          </a>
        </div>
      </footer>
      <div className={styles.footer_2}>
        <p className={styles.p}>
          Copyright © 2023 – EDUCAT. Tous droits réservés
        </p>
      </div>
    </div>
  );
};

export default Footer;
