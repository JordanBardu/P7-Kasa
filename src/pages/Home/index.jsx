import "../../assets/style/homepage.css";
import MainBanner from "../../components/MainBanner/index.jsx";
import HousingGrid from "../../components/HousingGrid/index.jsx";

function Home() {
  return (
    <>
      <MainBanner bannerText="Chez vous, partout et ailleurs" />
      <HousingGrid />
    </>
  );
}

export default Home;
