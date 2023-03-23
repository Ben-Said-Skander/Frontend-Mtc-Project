import React from "react";
import Footer from "./Footer";
import styles from "./styles.module.css";
const AboutUs = () => {
  return (
    <div>
      <div class={styles.about_container}>
        <div class={styles.image_container}>
          <img
            src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/571d82c5059e5cd299902068/vbvf-min.jpg"
            alt=""
          />
        </div>

        <div class={styles.text_container}>
          <h1 className={styles.h1}>Qui sommes nous</h1>
          <p className={styles.p}>
            {" "}
            <h4 className={styles.h4}>
              {" "}
              est un site éducatif multidisciplinaire, l'endroit où vous pouvez
              découvrir et apprendre à propos de toutes ce qui vous intéressent.
            </h4>
            <br /> Nous sommes une équipe dévouée d'enseignants, d'experts et de
            passionnés qui partagent la même mission : rendre l'apprentissage
            accessible à tous. Notre site propose une large gamme de cours en
            ligne couvrant de nombreux domaines, allant de la technologie à la
            santé en passant par les sciences sociales, les arts et les
            sciences.
            <br /> Nous croyons que l'apprentissage n'a pas de limites et que
            chacun devrait avoir la possibilité d'explorer ses centres d'intérêt
            et de développer ses compétences dans de nombreux domaines
            différents. Nous sommes fiers de fournir des ressources éducatives
            de qualité supérieure qui sont à la fois accessibles et amusantes.
            <br /> Que vous soyez à la recherche d'une formation pour votre
            carrière, d'un hobby passionnant ou simplement d'un moyen d'acquérir
            de nouvelles connaissances, nous avons ce qu'il vous faut.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
