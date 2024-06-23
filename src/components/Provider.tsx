import React from "react";
import "./Provider.css";

const Provider = ({
  provider,
  onClick,
}: {
  provider: string;
  onClick: () => void;
}) => {
  const handleClick = () => {
    onClick();
  };

  const getImage = () => {
    switch (provider) {
      case "Kaiser Permanente":
        return require("../assets/kaiser.jpeg");
      case "Dignity Health":
        return require("../assets/dignity.png");
      case "Stanford Health":
        return require("../assets/stanford.jpeg");
      case "Sutter Health":
        return require("../assets/sudder.png");
      default:
        return "";
    }
  };

  const image = getImage();

  return (
    <div className="provider" onClick={handleClick}>
      <div className="info">
        <img src={image} alt="provider" />
        <h3>{provider}</h3>
      </div>
      <img
        src={require("../assets/arrow-right.png")}
        alt="arrow"
        className="arrow"
      />
    </div>
  );
};

export default Provider;
