import React from "react";
import './SliderSkils.css';


const slidesInfoSkills =[
   {
    src:"https://res.cloudinary.com/dltjb3yhc/image/upload/v1662331680/skils_img/javascript_recortada_ktq5nx.png",
    alt:"Javascript",
    desc:"Javascript"
   },

   {
    src:"https://res.cloudinary.com/dltjb3yhc/image/upload/v1662331680/skils_img/typescript_recortada_ycxe77.png",
    alt:"Typescript",
    desc:"Typescript"
   },

   {
    src:"https://res.cloudinary.com/dltjb3yhc/image/upload/v1662331680/skils_img/nodejs_recortada_aw5pnt.png",
    alt:"Node js",
    desc:"Node js"
   },

   {
    src:"https://res.cloudinary.com/dltjb3yhc/image/upload/v1662331680/skils_img/expre_recortada_qsu7vx.png",
    alt:"Express",
    desc:"Express"
   },

   {
    src:"https://res.cloudinary.com/dltjb3yhc/image/upload/v1662331680/skils_img/html5_recortada_ti2xpg.png",
    alt:"Html",
    desc:"Html"
   },

   {
    src:"https://res.cloudinary.com/dltjb3yhc/image/upload/v1662331679/skils_img/css_recortada_bgm1jd.png",
    alt:"Css",
    desc:"Css"
   },

   {
    src:"https://res.cloudinary.com/dltjb3yhc/image/upload/v1662331679/skils_img/react_recortada_s7kbam.png",
    alt:"React",
    desc:"React"
   },

   {
    src:"https://res.cloudinary.com/dltjb3yhc/image/upload/v1662331679/skils_img/sequelize_recortada_mcpcwy.png",
    alt:"Sequelize",
    desc:"Sequelize"
   },

   {
    src:"https://res.cloudinary.com/dltjb3yhc/image/upload/v1662331679/skils_img/redux_recortada_gedjzh.png",
    alt:"Redux",
    desc:"Redux"
   },

   {
    src:"https://res.cloudinary.com/dltjb3yhc/image/upload/v1669703749/skills/icons8-postgresql-415_f2fasl.png",
    alt:"Postgresql",
    desc:"Postgresql"
   },

   {
    src:"https://res.cloudinary.com/dltjb3yhc/image/upload/v1662331679/skils_img/python_recortada_op4l8o.png",
    alt:"Python",
    desc:"Python"
   },

   {
    src:"https://res.cloudinary.com/dltjb3yhc/image/upload/v1678112564/skills/file_type_mongo_icon_130383_xos9g3.png",
    alt:"Mongo db",
    desc:"Mongo db"
   }
]


const SlidesSkills = slidesInfoSkills.map(slide=>(
    <div className="slide-container">
        <img src={slide.src} alt={slide.alt}/>
        <div className="slide-desc">
            <span>{slide.desc}</span>
        </div>
    </div>
))

export default SlidesSkills;