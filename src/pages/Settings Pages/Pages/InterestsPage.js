import React from 'react';
import Nav from './Nav';
import styles from './styles.module.css';
const Interests = () => {
  return (
    <div className={styles.menu_s}>
      <div className={styles.wrapper}>
        {/*Top menu */}

        <Nav />
        {/*  profile Setting   */}

        <div className={styles.tab_content} id="">
          <div className={styles.title}> intérêts Paramètres </div>
          <div className={styles.Quetion}> Qu'est-ce qui vous intéresse ? </div>
          <section className={styles.radio_section}>
            <div className={styles.radio_list}>
              <div className={styles.radio_item}>
                <input
                  className={styles.input}
                  type="radio"
                  name="radio"
                  id="radio1"
                />
                <label className={styles.label} htmlFor="radio1">
                  Accounting{' '}
                </label>
              </div>
              <div className={styles.radio_item}>
                <input
                  className={styles.input}
                  type="radio"
                  name="radio"
                  id="radio2"
                />
                <label className={styles.label} htmlFor="radio2">
                  {' '}
                  design
                </label>
              </div>
              <div className={styles.radio_item}>
                <input
                  className={styles.input}
                  type="radio"
                  name="radio"
                  id="radio3"
                />
                <label className={styles.label} htmlFor="radio3">
                  {' '}
                  consulting
                </label>
              </div>
              <div className={styles.radio_item}>
                <input
                  className={styles.input}
                  type="radio"
                  name="radio"
                  id="radio4"
                />
                <label className={styles.label} htmlFor="radio4">
                  {' '}
                  sports
                </label>
              </div>
              <div className={styles.radio_item}>
                <input
                  className={styles.input}
                  type="radio"
                  name="radio"
                  id="radio5"
                />
                <label className={styles.label} htmlFor="radio5">
                  {' '}
                  Web{' '}
                </label>
              </div>
            </div>
            <div className={styles.radio_list}>
              <div className={styles.radio_item}>
                <input
                  className={styles.input}
                  type="radio"
                  name="radio"
                  id="radio6"
                />
                <label className={styles.label} htmlFor="radio6">
                  {' '}
                  financial
                </label>
              </div>
              <div className={styles.radio_item}>
                <input
                  className={styles.input}
                  type="radio"
                  name="radio"
                  id="radio7"
                />
                <label className={styles.label} htmlFor="radio7">
                  Music{' '}
                </label>
              </div>
              <div className={styles.radio_item}>
                <input
                  className={styles.input}
                  type="radio"
                  name="radio"
                  id="radio8"
                />
                <label className={styles.label} htmlFor="radio8">
                  {' '}
                  Gaming
                </label>
              </div>
              <div className={styles.radio_item}>
                <input
                  className={styles.input}
                  type="radio"
                  name="radio"
                  id="radio9"
                />
                <label className={styles.label} htmlFor="radio9">
                  Tech{' '}
                </label>
              </div>
              <div className={styles.radio_item}>
                <input
                  className={styles.input}
                  type="radio"
                  name="radio"
                  id="radio10"
                />
                <label className={styles.label} htmlFor="radio10">
                  autre
                </label>
              </div>
            </div>
          </section>

          <div className={styles.radio_button}>
            <input className={styles.input} type="button" value="soumettre" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interests;
