import React from "react";
import styles from "./styles.module.css";
import {SiGooglemeet} from "react-icons/si";
const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div>
      <nav className={`${styles.sidebar_c} ${sidebarOpen ? "" : styles.close}`}>
        <header>
          <div className={styles.image_text}>
            <span className={styles.image}>
              <img className={styles.img} src="./logo-social.png" alt="" />
            </span>
          </div>

          <i
            className={`${styles.toggle} ${styles.i} fa fa-angle-double-left toggle`}
            onClick={toggleSidebar}
          ></i>
        </header>

        <div className={styles.menu_bar}>
          <div className={styles.menu}>
            <ul className={styles.menu_links}>
              <li className={styles.nav_link}>
                <a className={styles.a} href="#">
                  <i
                    className={
                      styles.i + " " + styles.icon + " " + "fa fa-dashboard"
                    }
                  ></i>
                  <span className={`${styles.text} ${styles.nav_text}`}>
                    Tableau de bord
                  </span>
                </a>
              </li>

              <li className={styles.nav_link}>
                <a className={styles.a} href="#">
                  <i
                    className={
                      styles.i + " " + styles.icon + " " + "fa fa-clipboard "
                    }
                  ></i>
                  <span className={`${styles.text} ${styles.nav_text}`}>
                    Les cours
                  </span>
                </a>
              </li>

              <li className={styles.nav_link}>
                <a className={styles.a} href="#">
                  <i
                    className={
                      styles.i +
                      " " +
                      styles.icon +
                      " " +
                      "fa fa-graduation-cap "
                    }
                  ></i>
                  <span className={`${styles.text} ${styles.nav_text}`}>
                    Ma classe
                  </span>
                </a>
              </li>

              <li className={styles.nav_link}>
                <a className={styles.a} href="#">
                  <i
                    className={
                      styles.i + " " + styles.icon + " " + "fa fa-cogs "
                    }
                  ></i>
                  <span className={`${styles.text} ${styles.nav_text}`}>
                    Paramètres
                  </span>
                </a>
              </li>

              <li className={styles.nav_link}>
                <a className={styles.a} href="#">
                <i
                    className={
                      styles.i + " " + styles.icon + " " }
                  ><SiGooglemeet/></i>
                  <span className={`${styles.text} ${styles.nav_text}`}>
                    <a href="https://meet.google.com/new?hs=180&authuser=0" style={{color:"black"}}>Start a meeting</a>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
