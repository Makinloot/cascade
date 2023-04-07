import PageTitle from "../../components/page-title/PageTitle";

import spain from '../../assets/spain.png'
import person from '../../assets/person.png'
import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <PageTitle page="about" />
      <div className="container">
        <div className="about-wrapper">

          <div className="about-details flex-row">
            <div className="location">
              <h2>location</h2>
              <img src={spain} alt="spain flag" />
            </div>
            <div className="links flex-col">
              <h2>links</h2>
              <a href="#" target="_blank">soundcloud</a>
              <a href="#" target="_blank">instagram</a>
              <a href="#" target="_blank">twitter</a>
              <a href="#" target="_blank">discogs</a>
            </div>
            <div className="story">
              <h2>story</h2>
              <p>
                Cascade records is a techno-ambient label founded in the capital
                of Georgia, Tbilisi, the author and founder of the idea is the
                solo mysterious project artist IV Georgian artist, who from 2020
                presents projects in the dark-ambient genre such as Cascade
                promo series, Cascade demo series.. Cascade family in 2021-22
                After the expansion, the label continued to operate in
                Spain.Where Cascade Records' new resident Ramzi, in
                collaboration with founder IV, presents B2B projects, Cascade
                sellers series, Cascade podcast series, and the label also
                presents epic solo podcasts by legendary techno artists from
                various labels
              </p>
            </div>
          </div>

          <div className="about-stats">
            <h2>stats</h2>
            <div className="stats flex-row">

              <div className="events">
                <div className="title flex-row">
                  <img src={person} />
                  <span>First event on RA</span>
                </div>
                <h3>2023</h3>
              </div>

              <div className="regions">
                <div className="title flex-row">
                  <img src={person} />
                  <span>Regions most played</span>
                </div>
                <h3>berlin</h3>
                <h3>amsterdam</h3>
                <h3>london</h3>
                <h3>munich</h3>
              </div>

              <div className="clubs">
                <div className="title flex-row">
                  <img src={person} />
                  <span>Regions most played</span>
                </div>
                <h3>bassiano</h3>
                <h3>berghain</h3>
                <h3>city club</h3>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
