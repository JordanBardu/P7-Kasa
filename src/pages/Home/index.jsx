import "../../assets/style/homepage.css";
import MainBanner from "../../components/MainBanner/index.jsx";
import HousingGrid from "../../components/HousingGrid/index.jsx";
import bannerSrc from "../../assets/images/homebanner.png";

function Home() {
  return (
    <>
      <MainBanner
        bannerText="Chez vous, partout et ailleurs"
        imageSrc={bannerSrc}
      />
      <HousingGrid />
    </>
  );
}

export default Home;
