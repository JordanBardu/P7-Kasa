import { useState } from "react";

function Collapse({ title, type, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-container">
      <div className="collapse-title-container" onClick={handleCollapse}>
        <h2 className="collapse-title">{title}</h2>
        <img
          className="arrow-container"
          src="../../assets/images/arrow.png"
          alt="Flèche de déroulement"
        />
      </div>
      <div className="collapse-content-container">
        <div
          className={`collapse-content ${isOpen ? "collapse-content-show" : ""}`}
        >
          {type === "text" ? (
            <p className="collapse-text">{content}</p>
          ) : (
            <ul className="collapse-list">
              {content.map((item) => (
                <li key={item} className="collapse-item">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Collapse;
