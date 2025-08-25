import logements from "../../assets/logements.json";
import Card from "../Card/index.jsx";

function HousingGrid() {
  const handleCardClick = (housingId) => {
    window.location.href = `/housing/${housingId}`;
  };

  return (
    <div className="grid-container">
      {logements.map((logement) => (
        <Card
          key={logement.id}
          item={logement}
          onClick={() => handleCardClick(logement.id)}
        />
      ))}
    </div>
  );
}

export default HousingGrid;
