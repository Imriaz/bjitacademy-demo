import React from "react";
import "./Training.css";
import trainingImage from "../../images/training_image.png";

const Training = () => {
  return (
    <section className="training__section">
      <article>
        <p className="training__section__line"></p>
        <h1 className="training__section__top__title">
          Dynamic & Multi-skilled
        </h1>
        <h1 className="training__section__second__title">
          Cross platform training
        </h1>
        <p className="training__section__description">
          Cross-trained employees, being dynamic and multi-skilled, may be
          considered for a promotion faster than others. This involves training
          an employee to be able to do the work that another employee does, in
          addition to their primary job role. It starts by identifying the
          skills required in a specific area, so employees can step in whenever
          needed.{" "}
        </p>
        <p className="training__section__description">
          Cross-trained employees feel more valued and become a great asset to
          the company. This training provides the employee with new
          opportunities that will further their career advancement, contributing
          to their bright future.{" "}
        </p>
      </article>
      <section>
        <img
          className="training__section__image"
          src={trainingImage}
          alt="training-images"
        />
      </section>
    </section>
  );
};

export default Training;
