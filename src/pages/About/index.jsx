import MainBanner from "../../components/MainBanner/index.jsx";
import bannerSrc from "../../assets/images/aboutbanner.jpg";
import Collapse from "../../components/Collapse/index.jsx";
import content from "./about_content.json";
import "../../assets/style/pages/about.css";

function About() {
  return (
    <>
      <MainBanner imageSrc={bannerSrc} />
      <div className="main-collapse-container">
        {content.map((item, index) => (
          <Collapse
            key={`${item.title}-${index}`}
            title={item.title}
            type="text"
            content={item.content}
          />
        ))}
      </div>
    </>
  );
}

export default About;
