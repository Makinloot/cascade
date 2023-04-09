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

const Slider = () => {
  return (
    <div className="slider">
      <h2 className="slider-title">2022</h2>
      <Swiper navigation={true} modules={[Navigation]} slidesPerView={4.2} className="mySwiper">
        <SwiperSlide>
          <img src={slide} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
