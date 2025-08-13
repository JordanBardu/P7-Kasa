import { Navigate, useParams } from "react-router";
import logements from "../../assets/logements.json";
import Collapse from "../../components/Collapse/index.jsx";
import "../../assets/style/pages/housing.css";
import HousingRating from "../../components/HousingRating/index.jsx";
import Gallery from "../../components/Gallery/index.jsx";

function Housing() {
  let params = useParams();
  const id = params.housingId;
  const selectedHousing = logements.find((logement) => logement.id === id);

  if (!selectedHousing) {
    return <Navigate to="/not-found" replace />;
  }

  return (
    <div className="main-housing-container">
      {selectedHousing.pictures.length > 1 ? (
        <Gallery pictures={selectedHousing.pictures} />
      ) : (
        <div
          className="housing-cover"
          style={{
            backgroundImage: `url(${selectedHousing.cover})`,
          }}
        ></div>
      )}
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
