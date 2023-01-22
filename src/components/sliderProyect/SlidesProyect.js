import React from "react";
import './SliderProyect.css';

const SlidesInfoProyects=[
    {
        src:"https://res.cloudinary.com/dltjb3yhc/image/upload/v1664142759/proyectos/imagen_32_p7m0bj.png",
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
    },
    {
        src:"https://res.cloudinary.com/dltjb3yhc/image/upload/v1663607379/proyectos/Captura_de_pantalla_2022-09-19_120926_kro9a0.png",
        alt:"bsale-Tienda",
        desc:"bsale-Tienda",
        ub:"https://frontend-bsale-plum.vercel.app/"
    },
    {
        src:"https://res.cloudinary.com/dltjb3yhc/image/upload/v1664141011/proyectos/imagen_3_ayomq7.png",
        alt:"WeatherApp",
        desc:"WeatherApp",
        ub:"https://weather-app-kdqx.vercel.app/"
    },
    {
        src:"https://res.cloudinary.com/dltjb3yhc/image/upload/v1666843621/proyectos/bsale-store_adr9pu.png",
        alt:"Bsale-Store",
        desc:"Bsale-Store",
        ub:"https://front-bsale-emapaul.vercel.app/"
    },
    {
        src:"https://res.cloudinary.com/dltjb3yhc/image/upload/v1670474655/proyectos/emapelis2_ybgm9b.png",
        alt:"EmaPelis",
        desc:"EmaPelis",
        ub:"https://moviesweb-topaz.vercel.app/"
    },
    {
        src:"https://res.cloudinary.com/dltjb3yhc/image/upload/v1670475365/proyectos/elisa4_vy1adx.png",
        alt:"Portafolio Elisa",
        desc:"Portafolio Elisa",
        ub:"https://portafolio-elisa-tejada.vercel.app/"
    },
    {
        src:"https://res.cloudinary.com/dltjb3yhc/image/upload/v1672276540/Products_image/producto2_iodzgk.jpg",
        alt:"Api Products Graphql",
        desc:"Api Products Graphql",
        ub:"https://base-datos-productos.vercel.app/graphql"
    },
    {
        src:"https://res.cloudinary.com/dltjb3yhc/image/upload/v1674427217/proyectos/generador_de_contrase%C3%B1as_xciq2c.png",
        alt:"Generador de contraseñas",
        desc:"Generador de contraseñas",
        ub:"https://password-generator-ema-paul.vercel.app/"
    },

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