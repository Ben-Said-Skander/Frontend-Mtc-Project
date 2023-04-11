import React from "react";
import { Link } from "react-router-dom";
import AboutUs from "../About Us/AboutUs";
export default function Home() {
  return (
    <div>
      <div>
        {/* Mirrored from www.devsnews.com/template/micoach/micoach/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 13 Feb 2023 20:49:22 GMT */}
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>MiCoach - Online Courses HTML5 Template</title>
        <meta name="description" content />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="site.html" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="homeassets/img/favicon.ico"
        />
        {/* Place favicon.ico in the root directory */}
        {/* CSS here */}
        <link rel="stylesheet" href="homeassets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="homeassets/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="homeassets/css/animate.min.css" />
        <link rel="stylesheet" href="homeassets/css/magnific-popup.css" />
        <link rel="stylesheet" href="homeassets/css/nice-select.css" />
        <link rel="stylesheet" href="homeassets/css/fontawesome-all.min.css" />
        <link rel="stylesheet" href="homeassets/css/themify-icons.css" />
        <link rel="stylesheet" href="homeassets/css/metisMenu.css" />
        <link rel="stylesheet" href="homeassets/css/meanmenu.css" />
        <link rel="stylesheet" href="homeassets/css/slick.css" />
        <link rel="stylesheet" href="homeassets/css/main.css" />
       

        {/* header-start */}
        <header className="header-transparent">
          <div
            id="sticky-header"
            className="main-menu-area menu-padding pl-55 pr-55"
          >
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-7 col-md-6 col-8">
                  <div className="logo">
                    <a href="index.html">
                      <img src="homeassets/img/logo/logo.png" alt />
                    </a>
                  </div>
                </div>
                <div className="col-xl-7 d-none d-xl-block">
                  <div className="main-menu text-left ml-15">
                    <nav id="mobile-menu">
                      <ul>
                        
                        <li>
                        <Link to="/AboutUs">
                          <a href="contact.html">Nos Cours </a>
                          </Link>
                        </li>
                        <li>
                        <Link to="/AboutUs">
                          <a href="contact.html">Contacter nous </a>
                          </Link>
                        </li>
                        <li>
                        <Link to="/AboutUs">
                          <a href="AboutUs.js">A propos de nous </a>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-5 col-md-6 col-4">
                  <div className="header-right d-sm-flex align-items-center justify-content-end">
                    <div className="header-icon d-none d-md-inline-block">
                      
                    </div>
                    <div className="header-sing d-none d-md-inline-block"></div>
                    <div>
                      {" "}
                    
                       <Link to="/Signin">
                       <button className="rond1">
                       S'identifier
                       </button>
                              
                              
                              </Link>
                 

                           
                    </div>

                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* header-start */}
       
        <main>
          {/* hero-area start */}
          <section className="hero-area pos-rel">
            <div className="slider-img d-none d-sm-block">
              <img
                className="img-fluid"
                src="homeassets/img/slider/01.png"
                alt
              />
            </div>
            <div className="hero-slider">
              <div
                className="single-slider slider-height d-flex align-items-center"
                data-background="homeassets/img/slider/01.jpg"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-9">
                      <div className="hero-content mt-80">
                        <div className="hero-slider-caption">
                         
                          <h2
                            className="mb-45"
                            data-animation="fadeInUp"
                            data-delay=".7s"
                          >
                            C'est l'apprentissage qui vient à vous
                          </h2>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* hero-area end */}
         
          {/* course-cat-area-start */}
          <div className="course-cat-area pb-100">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                  <div className="section-title text-center mb-60">
                    <span> 
                    </span>
                    
                    
                    <span>
                             
                     
                      </span>
                    <h2>Catégories des Cours </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="course-cat-wrapper mb-30">
                    <div className="course-cat-img">
                      <a href="courses-details.html">
                        <img src="homeassets/img/course/01.jpg" alt />
                      </a>
                    </div>
                    <div className="course-cat-text">
                      <h4>
                        <a href="courses-details.html">Graphics Design (UI)</a>
                      </h4>
                      <span> Apprenez les principes de la conception Graphique et la calligraphie </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="course-cat-wrapper mb-30">
                    <div className="course-cat-img">
                      <a href="courses-details.html">
                        <img src="homeassets/img/course/02.jpg" alt />
                      </a>
                    </div>
                    <div className="course-cat-text">
                      <h4>
                        <a href="courses-details.html">Business </a>
                      </h4>
                      <span>Un cours complet comprenant les fondamentaux des affaires, le leadership</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="course-cat-wrapper mb-30">
                    <div className="course-cat-img">
                      <a href="courses-details.html">
                        <img src="homeassets/img/course/03.jpg" alt />
                      </a>
                    </div>
                    <div className="course-cat-text">
                      <h4>
                        <a href="courses-details.html">Informatique</a>
                      </h4>
                      <span>maîtriser les sciences informatiques et les langages de programmation</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="course-cat-wrapper mb-30">
                    <div className="course-cat-img">
                      <a href="courses-details.html">
                        <img src="homeassets/img/course/04.jpg" alt />
                      </a>
                    </div>
                    <div className="course-cat-text">
                      <h4>
                        <a href="courses-details.html">
                          Productivité Bureautique
                        </a>
                      </h4>
                      <span>Gagnez du temps, améliorez la productivité et la performance</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="course-cat-wrapper mb-30">
                    <div className="course-cat-img">
                      <a href="courses-details.html">
                        <img src="homeassets/img/course/05.jpg" alt />
                      </a>
                    </div>
                    <div className="course-cat-text">
                      <h4>
                        <a href="courses-details.html">Photographie</a>
                      </h4>
                      <span>
                        approfondir votre apprentissage sur la Photographie
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="course-cat-wrapper mb-30">
                    <div className="course-cat-img">
                      <a href="courses-details.html">
                        <img src="homeassets/img/course/06.jpg" alt />
                      </a>
                    </div>
                    <div className="course-cat-text">
                      <h4>
                        <a href="#">Santé et Bien être</a>
                      </h4>
                      <span>
                        Permettre à tous de vivre en bonne santé et promouvoir
                        le bien-être 
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="course-cat-wrapper mb-30">
                    <div className="course-cat-img">
                      <a href="courses-details.html">
                        <img src="homeassets/img/course/07.jpg" alt />
                      </a>
                    </div>
                    <div className="course-cat-text">
                      <h4>
                        <a href="courses-details.html">Marketing</a>
                      </h4>
                      <span>
                        {" "}
                        Développer votre activité en devenissant un expert en
                        marketing
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div className="course-cat-wrapper mb-30">
                    <div className="course-cat-img">
                      <a href="courses-details.html">
                        <img src="homeassets/img/course/08.jpg" alt />
                      </a>
                    </div>
                    <div className="course-cat-text">
                      <h4>
                        <a href="courses-details.html">Développement</a>
                      </h4>
                      <span>
                        Apprendre à coder est le véritable super pouvoir du 21e
                        siècle
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* course-cat-area-end */}
         {/* brand-area-start */}
<div className="brand-area theme-bg pb-65 pt-65">
  <div className="container">
    <div className="row brand-active">
      <div className="col-xl-2 text-center">
        <div className="single-brand text-center">
          <img src="homeassets/img/brand/01.png" alt />
        </div>
      </div>
      <div className="col-xl-2 text-center">
        <div className="single-brand">
          <img src="homeassets/img/brand/02.png" alt />
        </div>
      </div>
      <div className="col-xl-2 text-center">
        <div className="single-brand">
          <img src="homeassets/img/brand/03.png" alt />
        </div>
      </div>
      <div className="col-xl-2 text-center">
        <div className="single-brand">
          <img src="homeassets/img/brand/04.png" alt />
        </div>
      </div>
      <div className="col-xl-2 text-center">
        <div className="single-brand">
          <img src="homeassets/img/brand/05.png" alt />
        </div>
      </div>
      <div className="col-xl-2 text-center">
        <div className="single-brand">
          <img src="homeassets/img/brand/01.png" alt />
        </div>
      </div>
    </div>
  </div>
</div>
{/* brand-area-end */}
{/*we-area-area start*/}
<section className="we-are-area grey-bg pt-160 pb-100">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-xl-4 col-lg-5 col-md-12">
        <div className="skill-wrapper">
          <div className="section-title text-left mb-35">
            <span><i className="fal fa-ellipsis-h" /> Qui sommes nous</span>
            <h2>Qui sommes nous</h2>
            <p> 
              est un site éducatif multidisciplinaire, l'endroit où vous pouvez
              découvrir et apprendre à propos de toutes ce qui vous intéressent.
              Nous sommes une équipe dévouée d'enseignants, d'experts et de
            passionnés qui partagent la même mission : rendre l'apprentissage
            accessible à tous. Notre site propose une large gamme de cours en
            ligne couvrant de nombreux domaines, allant de la technologie à la
            santé en passant par les sciences sociales, les arts et les
            sciences.
            
            <br /> Que vous soyez à la recherche d'une formation pour votre
            carrière, d'un hobby passionnant ou simplement d'un moyen d'acquérir
            de nouvelles connaissances, nous avons ce qu'il vous faut.
              </p>
          </div>
          
        </div>
      </div>
      <div className="col-xl-8 col-lg-7 col-md-12">
        <div className="our-video pos-rel">
          <div className="video-thumb">
            <img src="homeassets/img/bg/video-bg-02.jpg" alt />
          </div>
          <div className="video-area">
            <a className="popup-video" href="https://www.youtube.com/watch?v=D-goSWGqI2U"><i className="fas fa-play" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/*we-area-area end*/}
{/* contact-area-start */}
<div className="contact-area grey-bg pb-100">
  <div className="container">
    <div className="row">
      <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
        <div className="section-title text-center mb-60">
          <span><i className="fal fa-ellipsis-h" /> Contacter nous <i className="fal fa-ellipsis-h" /></span>
          <h2>Laissez-nous un message</h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xl-12">
        <div className="contact-form-area">
          <form action="#" className="subscribe contact-post-form contact-form">
            <div className="row">
              <div className="col-xl-4">
                <div className="input-text">
                  <input className="form-control" type="text" placeholder="Full Name Here" />
                </div>
              </div>
              <div className="col-xl-4">
                <div className="input-text email-text">
                  <input className="form-control" type="text" placeholder="Email Here" />
                </div>
              </div>
              <div className="col-xl-4">
                <div className="input-text phone-text">
                  <input className="form-control" type="text" placeholder="Phone Number" />
                </div>
              </div>
              <div className="col-12">
                <div className="input-text message-text">
                  <textarea name id cols={30} rows={10} placeholder="Write  Message" defaultValue={""} />
                </div>
              </div>
              <div className="col-12">
                <div className="lg-btn lg-btn-03 text-center">
                  <a className="c-btn" href="#">send message <i className="far fa-long-arrow-alt-right" /></a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

        </main>
        {/* JS here */}
        <script src="homeassets/js/vendor/modernizr-3.5.0.min.js"></script>
        <script src="homeassets/js/vendor/jquery-1.12.4.min.js"></script>
        <script src="homeassets/js/popper.min.js"></script>
        <script src="homeassets/js/bootstrap.min.js"></script>
        <script src="homeassets/js/owl.carousel.min.js"></script>
        <script src="homeassets/js/isotope.pkgd.min.js"></script>
        <script src="homeassets/js/slick.min.js"></script>
        <script src="homeassets/js/metisMenu.min.js"></script>
        <script src="homeassets/js/jquery.meanmenu.min.js"></script>
        <script src="homeassets/js/ajax-form.js"></script>
        <script src="homeassets/js/wow.min.js"></script>
        <script src="homeassets/js/waypoints.min.js"></script>
        <script src="homeassets/js/jquery.counterup.min.js"></script>
        <script src="homeassets/js/jquery.scrollUp.min.js"></script>
        <script src="homeassets/js/imagesloaded.pkgd.min.js"></script>
        <script src="homeassets/js/jquery.magnific-popup.min.js"></script>
        <script src="homeassets/js/jquery.nice-select.js"></script>
        <script src="homeassets/js/jquery.easypiechart.js"></script>
        <script src="homeassets/js/main.js"></script>
      </div>
      <AboutUs />
    </div>
  );
}
