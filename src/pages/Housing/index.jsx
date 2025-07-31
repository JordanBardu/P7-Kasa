import { useParams } from "react-router";
import logements from "../../assets/logements.json";
import Collapse from "../../components/Collapse/index.jsx";
import NotFound from "../NotFound/index.jsx";

function Housing() {
  let params = useParams();
  const id = params.housingId;
  const selectedHousing = logements.find((logement) => logement.id === id);

  if (!selectedHousing) {
    return <NotFound />;
  }

  return (
    <div className="main-housing-container main-container">
      <div className="housing-cover"></div>
      <h3>{selectedHousing.title}</h3>
      <p>{selectedHousing.location}</p>
      <ul>
        {selectedHousing.tags.map((tag, index) => (
          <li key={index} className="housing-tag">
            {tag}
          </li>
        ))}
      </ul>
      <div className="host-container">
        <p>{selectedHousing.host.name}</p>
        <div className="host-picture"></div>
      </div>
      <p>rating : {selectedHousing.rating}</p>
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
  );
}

export default Housing;
