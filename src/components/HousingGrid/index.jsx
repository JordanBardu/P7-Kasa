import logements from "../../assets/logements.json";
import Card from "../Card/index.jsx";

function HousingGrid() {
  return (
    <div className="grid-container main-container">
      {logements.map((logement) => (
        <Card item={logement} />
      ))}
    </div>
  );
}

export default HousingGrid;
