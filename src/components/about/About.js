import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className='about-container'>
        <div className='about-desc'>
            <h1>Sobre mi ...</h1>
            <p>
                Full Stack Developer con estudios en Ingenieria Mecatrónica. Actualmente vengo trabajando con tecnologias como HTML, 
                CSS,Javascript, React, Redux, Node.js, Express, Postgres SQL, Sequelize, Python, y Typescript. Con pensamiento creativo,
                resolución de problemas, trabajo en equipo, comunicación y autonomía.
            </p>
        </div>
        <div className="about-img">
            <img className="img-bordes" src="https://res.cloudinary.com/dltjb3yhc/image/upload/v1662318823/imagen%20de%20portafolio/imagen_recortada_dnzb5h.jpg" alt="about"/>
        </div>
    </div>
  )
}

export default About