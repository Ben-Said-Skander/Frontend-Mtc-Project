import React from 'react';
import Nav from './Nav';
import styles from './styles.module.css';
const Password = () => {
  return (
    <div className={styles.menu_s}>
      <div className={styles.wrapper}>
        {/*Top menu */}

        <Nav />
        {/*  profile Setting   */}
        <div className={styles.tab_content} id="pass">
          <div className={styles.title}> Paramètres de mot de passe </div>
          <form
            className={styles.form}
            action="#"
            id="forum"
            name="forum"
            onsubmit="return verif()"
          >
            <div className={styles.user_details}>
              <div className={styles.input_box}>
                <span className={styles.details}> Ancien mot de passe </span>
                <input
                  className={styles.input}
                  type="text"
                  placeholder=" Entrez l'ancien mot de passe"
                  id="oldpassword"
                  onkeyup="this.value=this.value.toUpperCase()"
                />
              </div>
              <div className={styles.input_box}>
                <span className={styles.details}> Nouveau mot de passe</span>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Entrez  Nouveau mot de passe"
                  id="newpassword"
                  onkeyup="this.value=this.value.toUpperCase()"
                />
              </div>
              <div className={styles.input_box}>
                <span className={styles.details}>
                  {' '}
                  Confirmez le mot de passe{' '}
                </span>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Confirmez le mot de passe"
                  id="confirm"
                />
              </div>
            </div>
            <div className={styles.button}>
              <input
                className={styles.input}
                id="submit "
                type="button"
                value="Mise à jour"
              />
              <input
                className={styles.input}
                id="restart "
                type="button"
                value="Annuler"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Password;
