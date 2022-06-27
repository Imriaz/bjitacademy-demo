import React from 'react';
import './Footer.css';
import logo from "../../images/Academy_logo.png";
import youtube_logo from '../../images/youtube_logo.png';
import linkedin_logo from '../../images/Linkedin_logo.png';
import facebook_logo from '../../images/Facebook_logo.png';

const Footer = () => {
return (
  <footer className="footer__container">
    <section className="footer__container__elements">
      <figure className="footer__container__logo">
        <img
          src={logo}
          className="footer__container__logo__img"
          alt="BJIT Logo"
        />
      </figure>
      <article className="footer__container__description">
        <div className="footer__container__description__div">
          <p className="footer__container__description__div__header">Company</p>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>BJIT website</p>
        </div>
        <div className="footer__container__description__div">
          <p className="footer__container__description__div__header">
            Training program
          </p>
          <p>Empower fresh talents</p>
          <p className="footer__container__description__div__link__active">
            <span>
              <u>Cross platform training</u>
            </span>
          </p>
          <p>Upskill training</p>
        </div>
        <div className="footer__container__description__div__end">
          <p className="footer__container__description__div__header">
            Get in touch
          </p>
          <div className="footer__container__description__div__sub">
            <input
              className="footer__container__description__div__sub-input"
              placeholder="Enter your email address"
            ></input>
            <button className="footer__container__description__div__sub-btn">
              Subscribe{" "}
            </button>
          </div>
        </div>
      </article>
    </section>
    <section className="footer__container__bottom_line">
      <hr />
    </section>
    <section className="footer__container__social">
      <p>Copyright &copy; 2022 BJIT Academy Ltd. All rights reserved.</p>
      <div className="footer__container__social__icon">
      <h1>
        Follow us{" "}
        <img className="social__icon" src={youtube_logo} alt="youtube logo" />
        <img className="social__icon" src={linkedin_logo} alt="linkedin logo" />
        <img className="social__icon" src={facebook_logo} alt="facebook logo" />
      </h1>
      </div>
    </section>
  </footer>
);
};

export default Footer;