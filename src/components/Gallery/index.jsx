import { useState } from "react";

function Gallery({ pictures }) {
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

  const handleNextPicture = () => {
    setCurrentPictureIndex(
      currentPictureIndex < pictures.length - 1 ? currentPictureIndex + 1 : 0,
    );
  };
  const handlePreviousPicture = () => {
    setCurrentPictureIndex(
      currentPictureIndex > 0 ? currentPictureIndex - 1 : pictures.length - 1,
    );
  };

  return (
    <div
      className="housing-cover"
      style={{
        backgroundImage: `url(${pictures[currentPictureIndex]})`,
      }}
    >
      <div className="arrows-container">
        <div className="arrow-back" onClick={handlePreviousPicture}></div>
        <div className="arrow-next" onClick={handleNextPicture}></div>
      </div>
      <span className="picture-pagination">
        {currentPictureIndex + 1}/{pictures.length}
      </span>
    </div>
  );
}

export default Gallery;
