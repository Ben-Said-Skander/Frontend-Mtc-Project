import React from "react";
import styles from "./styles.module.css";
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
            <li className={styles.search_box}>
              <i
                className={styles.i + " " + styles.icon + " " + "fa fa-search"}
              ></i>
              <input
                className={styles.input}
                type="text"
                placeholder="       search"
              />
            </li>

            <ul className={styles.menu_links}>
              <li className={styles.nav_link}>
                <a className={styles.a} href="#">
                  <i
                    className={
                      styles.i + " " + styles.icon + " " + "fa fa-dashboard"
                    }
                  ></i>
                  <span className={`${styles.text} ${styles.nav_text}`}>
                    Dashboard
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
                    All Courses
                  </span>
                </a>
              </li>

              <li className={styles.nav_link}>
                <a className={styles.a} href="#">
                  <i
                    className={
                      styles.i + " " + styles.icon + " " + "fa fa-calendar "
                    }
                  ></i>
                  <span className={`${styles.text} ${styles.nav_text}`}>
                    Schedules
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
                    My Class
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
                    Settings
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
