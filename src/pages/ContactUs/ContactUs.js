import React from "react";
import "./ContactUs.css";
import homeIcon from "../../images/home_icon.png";
import mailIcon from "../../images/mail_icon.png";
import callIcon from "../../images/call_icon.png";
import map from "../../images/map.png";

const ContactUs = () => {
  return (
    <div>
      <section className="contact">
        <div>
          <hr className="contact__line" />
        </div>
        <div className="contact__details">
          <header className="contact__heading">
            <h2 className="contact__title">Contact</h2>
            <p className="contact__moto">
              We are always here to extend our helping hand. Please feel free to
              reach out to us anytime.
            </p>
          </header>
          <h3 className="headline">BJIT Academy Office</h3>
          <div className="contact__office">
            <img
              className="contact__office__icon"
              src={homeIcon}
              alt="home icon"
            />
            <p className="contact__office__text">
              H-2275, 2279, Pachkhula, Satarkul, Badda, Dhaka-1212, Bangladesh
            </p>
          </div>
          <div className="contact__office">
            <img
              className="contact__office__icon"
              src={mailIcon}
              alt="mail icon"
            />
            <p className="contact__office__text">
              bjitacademytraining2021@gmail.com
            </p>
          </div>
          <div className="contact__office">
            <img
              className="contact__office__icon"
              src={callIcon}
              alt="call icon"
            />
            <p className="contact__office__text">
              {" "}
              +88-02-9889820, +8801755997099
            </p>
          </div>
          <figure>
            <img
              className="contact__office__map"
              src={map}
              alt="BJIT Office Location"
            ></img>
          </figure>
        </div>
      </section>

      <section className="form">
        <div className="form__wrapper">
          <form className="form__body">
            <div className="form__element">
              <label className="form__element__label" for="name">
                Name <span className="form__element__star">*</span>
              </label>
              <input
                type="text"
                className="form__element__input"
                id="name"
                placeholder="Enter your name"
              ></input>
            </div>
            <div className="form__element">
              <label className="form__element__label" for="name">
                Email address <span className="form__element__star">*</span>
              </label>
              <input
                type="email"
                className="form__element__input"
                id="email"
                placeholder="Enter your email address"
              ></input>
            </div>
            <div className="form__element">
              <label className="form__element__label" for="name">
                {" "}
                Contact Number
              </label>
              <input
                type="tel"
                className="form__element__input"
                id="phone"
                placeholder="Enter your contact number"
              ></input>
            </div>
            <div className="form__element">
              <label className="form__element__label" for="name">
                Message <span className="form__element__star">*</span>
              </label>
              <textarea
                className="form__element__textarea"
                id="message"
                placeholder="Type something..."
              ></textarea>
            </div>
            <div className="form__element">
              <button type="submit" className="form__element__button">
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};
export default ContactUs;
