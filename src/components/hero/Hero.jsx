
import cascade from '../../assets/cascade-img.png'
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container flex-row">
        <div className="hero-wrapper flex-row">
          <h1>cascade</h1>
          <div className="hero-image">
            <img src={cascade} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
