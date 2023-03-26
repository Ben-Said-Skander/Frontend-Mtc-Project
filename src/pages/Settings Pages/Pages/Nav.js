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
          <h3 className={styles.h3}>Username</h3>
          <p className={styles.p}>BIO</p>
        </div>

        {/*menu item*/}
        <Link to="/" className={styles.a}>
          {" "}
          <i className={styles.i + " " + "fa fa-user"}></i>
          <span>profile</span>
        </Link>
        <Link to="/Password" className={styles.a}>
          <i className={styles.i + " " + "fa fa-key"}></i>
          <span>password</span>
        </Link>
        <Link to="/Interests" className={styles.a}>
          <i className={styles.i + " " + "fa fa-thumb-tack"}></i>
          <span>interests</span>
        </Link>

        <div className={styles.logout}>
          {" "}
          <i className={styles.i + " " + "fa fa-sign-out"}></i>
          <span>Logout</span>{" "}
        </div>
      </div>
    </div>
  );
};

export default Nav;
