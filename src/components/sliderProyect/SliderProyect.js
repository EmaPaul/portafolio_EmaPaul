import React from 'react';
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import './SliderProyect.css';
import SlidesProyect from './SlidesProyect.js'


const SliderProyect = () => {
  return (
    <div className="carousel_container">
        <div className="carousel_title">
            <h2>Mis Proyectos</h2>
        </div>
        <Carousel
            arrows
            slidesPerPage={3}
            infinite
            animationSpeed={200}
            centered
            offset={50}
            itemWidth={400}
            slides={SlidesProyect}
            breakpoints={{
              960: {
                slidesPerPage: 1,
                arrows: false,
                itemWidth: 250,
              },
            }}
        />
    </div>
  )
}

export default SliderProyect