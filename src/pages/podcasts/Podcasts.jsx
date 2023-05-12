import Mobile from "../../components/mobile/Mobile";
import Slider from "../../components/slider/Slider";
import "./Podcasts.scss";

const Podcasts = () => {
  return (
    <div className="podcasts">
      <div className="container">
        <p className="podcasts-paragraph">
          The weekly Podcast features an exclusive mix of electronic music from
          cascade selector series Mixed by Ramzi B2B IV
        </p>
        <div className="podcasts-podcast">
          <h3>/ this months podcast</h3>
          <Mobile />
        </div>
        <div className="podcasts-slider">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Podcasts;
