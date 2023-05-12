import PageTitle from "../../components/page-title/PageTitle";

import albumImg from "../../assets/album-preview.png";
import tracksImg from '../../assets/tracks.png'
import "./WorkingOn.scss";

const WorkingOn = () => {
  return (
    <div className="working-on">
      <PageTitle page="working on" />
      <div className="container">
        <div className="working-on-wrapper">

          <div className="working-on-item">
            <h2>Upcoming album</h2>
            <div className="flex-row">
              <img src={albumImg} />
              <p>
              At the beginning of 2023, as a result of the changes in records, IV and Ramzi's joint and solo tracks went into an active production phase through various platforms, which gave the artists new inspirations, this also led to the development of visual and graphic design.
              </p>
            </div>
          </div>

          <div className="working-on-item">
            <h2>Upcoming tracks</h2>
            <div className="flex-row">
              <img src={tracksImg} />
              <p>
              The label's resident artists present albums of their own creations, techno-ambient sounds, each album a diverse synthesis of muffled acid sounds and dark ambient backdrops, laced with merciless industrial kicks.With great respect, we must also mention that in the future plans of the label, for its development and popularization in the techno culture, it is necessary to create and release more albums within the framework of collaboration with young and well-experienced artists.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WorkingOn;
