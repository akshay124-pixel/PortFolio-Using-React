import React, { useState } from "react";

const Menu = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const menuStyle = {
    position: "relative",
    height: "280px",
    display: "flex",
    width: "280px",
    alignItems: "center",
    justifyContent: "center",
  };

  const toggleStyle = {
    position: "relative",
    height: "60px",
    background: "#fff",
    borderRadius: "50%",
    width: "60px",
    display: "flex",
    justifyContent: "center",
    fontSize: "2em",
    transition: "1.25s",
    alignItems: "center",
    color: "#333",
    cursor: "pointer",
    zIndex: "5",
    transform: isActive ? "rotate(360deg)" : "rotate(0deg)",
    boxShadow: isActive ? "0 0 0 2px #333" : "none",
  };

  return (
    <div className="menu" style={menuStyle}>
      <div
        className={`toggle ${isActive ? "active" : ""}`}
        style={toggleStyle}
        onClick={toggleMenu}
      >
        <ion-icon name="share-social"></ion-icon>
      </div>
    </div>
  );
};

export default Menu;
