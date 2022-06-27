import React from 'react';
import './Footer.css';
import logo from "../../images/Academy_logo.png";

const Footer = () => {
return (
  <footer className="footer__container">
    <section className="footer__container__description">
      <figure className="footer__logo">
        <img src={logo} className="footer__logo__img" alt="BJIT Logo" />
      </figure>
      <article className="footer__des">
        <div className="footer__des__div">
          <p className="footer__des__div__header">Company</p>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>BJIT website</p>
        </div>
        <div className="footer__des__div">
          <p className="footer__des__div__header">Training program</p>
          <p>Empower fresh talents</p>
          <p className="footer__des__div__link__active">
            <span>
              <u>Cross platform training</u>
            </span>
          </p>
          <p>Upskill training</p>
        </div>
        <div className="footer__des__div__end">
          <p className="footer__des__div__header">Get in touch</p>
          <div className="footer__des__div__subs">
            <input
              className="footer__des__div__subs-input"
              placeholder="Enter your email address"
            ></input>
            <button className="footer__des__div__subs-btn">Subscribe </button>
          </div>
        </div>
      </article>
    </section>
    <section>
      <hr />
    </section>
    <section className="footer__img__container"></section>
  </footer>
);
};

export default Footer;