import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
const Nav = () => {
  return (
    <div>
      <div className={styles.sidebar}>
        {/*profile image & text*/}

        <div className={styles.profile}>
          <img className={styles.img} src=" " alt="img" />
          <h4 className={styles.h4}>Nom d'utilisateur</h4>
          <p className={styles.p}>BIO</p>
        </div>

        {/*menu item*/}
        <Link to="/" className={styles.a}>
          {" "}
          <i className={styles.i + " " + "fa fa-user"}></i>
          <span>profil</span>
        </Link>
        <Link to="/Password" className={styles.a}>
          <i className={styles.i + " " + "fa fa-key"}></i>
          <span>mot de passe</span>
        </Link>
        <Link to="/Interests" className={styles.a}>
          <i className={styles.i + " " + "fa fa-thumb-tack"}></i>
          <span>intérêts</span>
        </Link>

        <div className={styles.logout}>
          {" "}
          <button className="logout_b">
            {" "}
            déconnecter<i className={styles.i + " " + "fa fa-sign-out"}></i>
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Nav;
