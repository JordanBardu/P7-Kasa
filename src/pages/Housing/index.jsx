import { useParams } from "react-router";
import logements from "../../assets/logements.json";
import Collapse from "../../components/Collapse/index.jsx";
import NotFound from "../NotFound/index.jsx";
import "../../assets/style/housing.css";
import HousingRating from "../../components/HousingRating/index.jsx";
import { useState } from "react";

function Housing() {
  let params = useParams();
  const id = params.housingId;
  const selectedHousing = logements.find((logement) => logement.id === id);
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

  if (!selectedHousing) {
    return <NotFound />;
  }

  const handleNextPicture = () => {
    setCurrentPictureIndex(
      currentPictureIndex < selectedHousing.pictures.length - 1
        ? currentPictureIndex + 1
        : 0,
    );
  };

  const handlePreviousPicture = () => {
    setCurrentPictureIndex(
      currentPictureIndex > 0
        ? currentPictureIndex - 1
        : selectedHousing.pictures.length - 1,
    );
  };

  return (
    <div className="main-housing-container">
      <div
        className="housing-cover"
        style={{
          backgroundImage: `url(${selectedHousing.pictures[currentPictureIndex]})`,
        }}
      >
        <div className="arrow-back" onClick={handleNextPicture}></div>
        <div className="arrow-next" onClick={handlePreviousPicture}></div>
      </div>
      <div className="housing-header">
        <h3 className="housing-title">{selectedHousing.title}</h3>
        <div className="host-container">
          <p>{selectedHousing.host.name}</p>
          <div
            className="host-picture"
            style={{ backgroundImage: `url(${selectedHousing.host.picture})` }}
          ></div>
        </div>
      </div>
      <p className="housing-location">{selectedHousing.location}</p>
      <div className="housing-infos">
        <ul className="housing-tags">
          {selectedHousing.tags.map((tag, index) => (
            <li key={index} className="housing-tag">
              {tag}
            </li>
          ))}
        </ul>
        <HousingRating value={selectedHousing.rating} />
      </div>
      <div className="housing-details">
        <Collapse
          key={`${selectedHousing.title}`}
          title="Description"
          type="text"
          content={selectedHousing.description}
        />
        <Collapse
          key={`${selectedHousing.title}`}
          title="Équipements"
          type="list"
          content={selectedHousing.equipments}
        />
      </div>
    </div>
  );
}

export default Housing;
