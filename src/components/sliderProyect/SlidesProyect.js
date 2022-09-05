import React from "react";
import './SliderProyect.css';

const SlidesInfoProyects=[
    {
        src:"https://res.cloudinary.com/dltjb3yhc/image/upload/v1662342709/proyectos/manga-coff_mixsf9.png",
        alt:"Manga-Coffee",
        desc:"Manga-Coffee",
        ub:"https://manga-coffee.vercel.app/"
    },
    {
        src:"https://res.cloudinary.com/dltjb3yhc/image/upload/v1662341521/proyectos/pi-food_captura_2_ksrrak.png",
        alt:"Pi-Food",
        desc:"Pi-Food",
        ub:"https://github.com/EmaPaul/Pi-Food"
    },
    {
        src:"https://res.cloudinary.com/dltjb3yhc/image/upload/v1662342056/proyectos/pi-country_ldvrbk.png",
        alt:"Pi-Country",
        desc:"Pi-Country",
        ub:"https://github.com/EmaPaul/PI-Country"
    },
    {
        src:"https://res.cloudinary.com/dltjb3yhc/image/upload/v1662343034/proyectos/calculadora_c2u1fd.png",
        alt:"Calculadora",
        desc:"Calculadora",
        ub:"https://github.com/EmaPaul/Calculadora-01/tree/master"
    },
    {
        src:"https://res.cloudinary.com/dltjb3yhc/image/upload/v1662343190/proyectos/targeta_cfipw4.png",
        alt:"Tarjeta",
        desc:"Tarjeta",
        ub:"https://github.com/EmaPaul/Tarjeta-02"
    }
]

const SlidesProyects = SlidesInfoProyects.map(slides=>(
    <div className="slide_container">
        <a href={slides.ub} target="_blank" rel="noreferrer">
            <img src={slides.src} alt={slides.alt}/>
        </a>
        
        <div className="slide_desc">
            <span>{slides.desc}</span>
        </div>
    </div>
))

export default SlidesProyects;