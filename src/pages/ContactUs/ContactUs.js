import React from "react";
import "./ContactUs.css";
import homeIcon from "../../images/home_icon.png";
import mailIcon from "../../images/mail_icon.png";
import callIcon from "../../images/call_icon.png";
import map from "../../images/map.png";

const ContactUs = () => {
  return (
    <div className="container">
      <div className="row">
        <section className="details">
          <div className="details__line ">
            <hr className="details__line" />
          </div>
          <div className="details__wrapper">
            <header className="details__heading">
              <h2 className="details__title">Contact</h2>
              <p className="details__tagline">
                We are always here to extend our helping hand. Please feel free
                to reach out to us anytime.
              </p>
            </header>
            <h3 className="details__office__headline">BJIT Academy Office</h3>
            <div className="details__office">
              <img className="details__image" src={homeIcon} alt="home icon" />
              <p className="details__office_text">
                H-2275, 2279, Pachkhula, Satarkul, Badda, Dhaka-1212, Bangladesh
              </p>
            </div>
            <div className="details__office">
              <img className="details__image" src={mailIcon} alt="mail icon" />
              <p className="details__office_text">
                bjitacademytraining2021@gmail.com
              </p>
            </div>
            <div className="details__office">
              <img className="details__image" src={callIcon} alt="call icon" />
              <p className="details__office_text">
                {" "}
                +88-02-9889820, +8801755997099
              </p>
            </div>
            <figure>
              <img
                className="details__map"
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
    </div>
  );
};
export default ContactUs;
