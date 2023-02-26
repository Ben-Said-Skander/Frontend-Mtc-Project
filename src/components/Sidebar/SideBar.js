import React from "react";
import Styles from "./myStyles.module.css";
const Sidebar = () => {
  const [isLoaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    const baliseScript = document.createElement("script");
    baliseScript.src = "./JSSidebar.js";
    baliseScript.addEventListener("load", () => setLoaded(true));
    document.body.appendChild(baliseScript);
  }, []);

  React.useEffect(() => {
    if (isLoaded) {
      // ...
    }
  }, [isLoaded]);

  return (
    <div>
      <nav className={Styles.sidebar_c + " " + Styles.close}>
        <header>
          <div className={Styles.image_text}>
            <span className={Styles.image}>
              <img className={Styles.img} src="assets/images/logo.png" alt="" />
            </span>
          </div>

          <i
            className={
              Styles.toggle +
              " " +
              Styles.i +
              " " +
              "fa fa-angle-double-left" +
              " " +
              "toggle"
            }
          ></i>
        </header>

        <div className={Styles.menu_bar}>
          <div className={Styles.menu}>
            <li className={Styles.search_box}>
              <i
                className={Styles.i + " " + Styles.icon + " " + "fa fa-search"}
              ></i>
              <input
                className={Styles.input}
                type="text"
                placeholder="       search"
              />
            </li>

            <ul className={Styles.menu_links}>
              <li className={Styles.nav_link}>
                <a className={Styles.a} href="#">
                  <i
                    className={
                      Styles.i + " " + Styles.icon + " " + "fa fa-dashboard"
                    }
                  ></i>
                  <span className={`${Styles.text} ${Styles.nav_text}`}>
                    Dashboard
                  </span>
                </a>
              </li>

              <li className={Styles.nav_link}>
                <a className={Styles.a} href="#">
                  <i
                    className={
                      Styles.i + " " + Styles.icon + " " + "fa fa-clipboard "
                    }
                  ></i>
                  <span className={`${Styles.text} ${Styles.nav_text}`}>
                    All Courses
                  </span>
                </a>
              </li>

              <li className={Styles.nav_link}>
                <a className={Styles.a} href="#">
                  <i
                    className={
                      Styles.i + " " + Styles.icon + " " + "fa fa-calendar "
                    }
                  ></i>
                  <span className={`${Styles.text} ${Styles.nav_text}`}>
                    Schedules
                  </span>
                </a>
              </li>

              <li className={Styles.nav_link}>
                <a className={Styles.a} href="#">
                  <i
                    className={
                      Styles.i +
                      " " +
                      Styles.icon +
                      " " +
                      "fa fa-graduation-cap "
                    }
                  ></i>
                  <span className={`${Styles.text} ${Styles.nav_text}`}>
                    My Class
                  </span>
                </a>
              </li>

              <li className={Styles.nav_link}>
                <a className={Styles.a} href="#">
                  <i
                    className={
                      Styles.i + " " + Styles.icon + " " + "fa fa-cogs "
                    }
                  ></i>
                  <span className={`${Styles.text} ${Styles.nav_text}`}>
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
