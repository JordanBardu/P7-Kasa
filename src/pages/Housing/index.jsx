import { useParams } from "react-router";
import logements from "../../assets/logements.json";
import Collapse from "../../components/Collapse/index.jsx";
import NotFound from "../NotFound/index.jsx";
import "../../assets/style/housing.css";

function Housing() {
  let params = useParams();
  const id = params.housingId;
  const selectedHousing = logements.find((logement) => logement.id === id);

  if (!selectedHousing) {
    return <NotFound />;
  }

  return (
    <div className="main-housing-container main-container">
      <div
        className="housing-cover"
        style={{ backgroundImage: `url(${selectedHousing.cover})` }}
      ></div>
      <h3 className="housing-title">{selectedHousing.title}</h3>
      <p className="housing-location">{selectedHousing.location}</p>
      <ul className="housing-tags">
        {selectedHousing.tags.map((tag, index) => (
          <li key={index} className="housing-tag">
            {tag}
          </li>
        ))}
      </ul>
      <div className="host-container">
        <p>{selectedHousing.host.name}</p>
        <div
          className="host-picture"
          style={{ backgroundImage: `url(${selectedHousing.host.picture})` }}
        ></div>
      </div>
      <p>rating : {selectedHousing.rating}</p>
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
