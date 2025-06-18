import { useParams } from "react-router";

function Housing() {
  let params = useParams();
  const id = params.housingId;
  // Vérifier si l'id est valide

  return <h1>Logement d'id : {id}</h1>;
}

export default Housing;
