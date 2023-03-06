import React from "react";
import "./About.css";
import cv from "../cv/CV Emmanuel Paul Carrillo Carpio.pdf";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h1>Sobre mi ...</h1>
        <p>
          Full Stack Developer con estudios en Ingenieria Mecatrónica.
          Actualmente vengo trabajando con tecnologias como HTML, CSS,
          Javascript, React, Redux, Node.js, Express, Postgres SQL, Mongo db,
          Sequelize, Python, y Typescript. Con pensamiento creativo, resolución
          de problemas, trabajo en equipo, comunicación y autonomía.
        </p>
        <div className="btn-container">
          <a href={cv} download="Emmanuel Paul Carrillo Carpio CV.pdf">
            <button className="button-27">Descargar CV</button>
          </a>
        </div>
      </div>
      <div className="about-img">
        <img
          className="img-bordes"
          src="https://res.cloudinary.com/dltjb3yhc/image/upload/v1662318823/imagen%20de%20portafolio/imagen_recortada_dnzb5h.jpg"
          alt="about"
        />
      </div>
    </div>
  );
};

export default About;
