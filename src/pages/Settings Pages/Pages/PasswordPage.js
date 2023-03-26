import React from "react";
import Nav from "./Nav";
import styles from "./styles.module.css";
const Password = () => {
  return (
    <div className={styles.menu_s}>
      <div className={styles.wrapper}>
        {/*Top menu */}

        <Nav />
        {/*  profile Setting   */}
        <div className={styles.tab_content} id="pass">
          <div className={styles.title}> Password Settings </div>
          <form
            className={styles.form}
            action="#"
            id="forum"
            name="forum"
            onsubmit="return verif()"
          >
            <div className={styles.user_details}>
              <div className={styles.input_box}>
                <span className={styles.details}> Old password </span>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Old Password"
                  id="oldpassword"
                  onkeyup="this.value=this.value.toUpperCase()"
                />
              </div>
              <div className={styles.input_box}>
                <span className={styles.details}> New password</span>
                <input
                  className={styles.input}
                  type="text"
                  placeholder=" New Pasword"
                  id="newpassword"
                  onkeyup="this.value=this.value.toUpperCase()"
                />
              </div>
              <div className={styles.input_box}>
                <span className={styles.details}> Confirm password </span>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Confirm password"
                  id="confirm"
                />
              </div>
            </div>
            <div className={styles.button}>
              <input
                className={styles.input}
                id="submit "
                type="button"
                value="Update"
              />
              <input
                className={styles.input}
                id="restart "
                type="button"
                value="Cancel"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Password;
