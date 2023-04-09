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
                lorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem
                ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem
                ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum
              </p>
            </div>
          </div>

          <div className="working-on-item">
            <h2>Upcoming tracks</h2>
            <div className="flex-row">
              <img src={tracksImg} />
              <p>
                lorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem
                ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem
                ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WorkingOn;
