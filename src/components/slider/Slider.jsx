// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Slider.scss";

// import required modules
import { Navigation } from "swiper";
import slide from "../../assets/slider/slide.png";
import slide2 from "../../assets/slider/slide2.png";
import slide3 from "../../assets/slider/slide3.png";
import slide4 from "../../assets/slider/slide4.png";

import { sliderData } from "../../data";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div className="slider">
      <h2 className="slider-title">2022</h2>
      <Swiper navigation={true} modules={[Navigation]} slidesPerView={4.2} className="mySwiper">
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
