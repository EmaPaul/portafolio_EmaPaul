import React from 'react';
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import SlidesSkills from "./SlidesSkills.js";
import './SliderSkils.css';

const SliderSkils = () => {
  return (
    <div className="carousel-container">
        <div className="carousel-title">
            <h2>Mis Skills</h2>
        </div>
        <Carousel
            arrows
            slidesPerPage={3}
            infinite
            animationSpeed={200}
            centered
            offset={50}
            itemWidth={400}
            slides={SlidesSkills}
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

export default SliderSkils