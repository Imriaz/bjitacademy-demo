import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
      <section className="banner">
        <h1 className="banner__title">Cross Platform training</h1>
        <p className="banner__title__topic">
          <span className="banner__title__topic__training">Training </span>{" "}
          <span className="banner__title__topic__separator">/ </span>{" "}
          <span>
            <u>Cross platform training</u>
          </span>
        </p>
      </section>
    );
};

export default Banner;