import React from 'react';
import '../../styles/Navbar.css';
import logo from '../../images/Academy_logo.png';
import down_arrow from '../../images/down_arrow.png';
import burger_icon from '../../images/burger_icon.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <figure className="navbar__logo__image">
          <img src={logo} alt="academy logo" />
        </figure>
        <figcaption className="navbar__logo__title">BJIT Academy</figcaption>
      </div>
      <ul className="navbar__link__container">
        <li className="navbar__link__container__link">HOME</li>
        <li className="navbar__link__container__link navbar__link__active">
          TRAINING{" "}
          <span className="navbar__link__container__down__icon">
            <img src={down_arrow} alt="down arrow" />
          </span>
        </li>
        <li className="navbar__link__container__link">ABOUT</li>
        <li className="navbar__link__container__link">CONTACT</li>
        <li className="navbar__link__container__burger__icon">
          <span>
            <img src={burger_icon} alt="burger icon" />
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;