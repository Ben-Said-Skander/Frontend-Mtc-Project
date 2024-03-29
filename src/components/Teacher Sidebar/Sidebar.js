import React from "react";
import styles from "./styles.module.css";
const TeacherSidebar = () => {
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
              <img className={styles.img} src="./mtc.png" alt="" />
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
                <a className={styles.a} href="../TeacherDashboard">
                  <i
                    className={
                      styles.i + " " + styles.icon + " " + "fa fa-user"
                    }
                  ></i>
                  <span className={`${styles.text} ${styles.nav_text}`}>
                    Profile
                  </span>
                </a>
              </li>
              <li className={styles.nav_link}>
                <a className={styles.a} href="../AllStudents">
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
                    Mes Etudiants
                  </span>
                </a>
              </li>
              <li className={styles.nav_link}>
                <a className={styles.a} href="../Demands">
                  <i
                    className={
                      styles.i + " " + styles.icon + " " + "fa fa-envelope"
                    }
                  ></i>
                  <span className={`${styles.text} ${styles.nav_text}`}>
                    Demandes
                  </span>
                </a>
              </li>

              <li className={styles.nav_link}>
                <a className={styles.a} href="../Homechat">
                  <i
                    className={
                      styles.i + " " + styles.icon + " " + "fa fa-comment "
                    }
                  ></i>
                  <span className={`${styles.text} ${styles.nav_text}`}>
                    Chat
                  </span>
                </a>
              </li>
     
              <li className={styles.nav_link}>
                <a className={styles.a} href="../AddFiles">
                  <i
                    className={
                      styles.i + " " + styles.icon + " " + "fa fa-clipboard "
                    }
                  ></i>
                  <span className={`${styles.text} ${styles.nav_text}`}>
                    Ajouter des cours
                  </span>
                </a>
              </li>

              <li className={styles.nav_link}>
                <a className={styles.a} href="../AddNotes">
                  <i
                    className={
                      styles.i + " " + styles.icon + " " + "fa fa-sticky-note "
                    }
                  ></i>
                  <span className={`${styles.text} ${styles.nav_text}`}>
                    Ajouter des notes
                  </span>
                </a>
              </li>

              <li className={styles.nav_link}>
                <a className={styles.a} href="../Calendrier">
                  <i
                    className={
                      styles.i + " " + styles.icon + " " + "fa fa-calendar "
                    }
                  ></i>
                  <span className={`${styles.text} ${styles.nav_text}`}>
                    Horaires
                  </span>
                </a>
              </li>

              <li className={styles.nav_link}>
                <a className={styles.a} href="../Profile">
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
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TeacherSidebar;
