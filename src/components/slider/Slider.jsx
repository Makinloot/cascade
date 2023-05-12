// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Slider.scss";

// import required modules
import { Navigation } from "swiper";

import { sliderData } from "../../data";
import { Link } from "react-router-dom";

const Slider = () => {

  const { width } = document.body.getBoundingClientRect()

  return (
    <div className="slider">
      <h2 className="slider-title">2022</h2>
      <Swiper 
        navigation={true} 
        modules={[Navigation]} 
        slidesPerView={width < 400 ? 3.2 : 4.2} 
        className="mySwiper"
      >
      {sliderData.map(slide => (
        <SwiperSlide>
          <Link to={slide.link} target="_blank" title={slide.title}>
            <img src={slide.cover} />
          </Link>
        </SwiperSlide>
      ))}
      </Swiper>
    </div>
  );
};

export default Slider;
