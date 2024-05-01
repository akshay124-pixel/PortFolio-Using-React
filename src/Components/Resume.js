import React from "react";
import Resumes from "./Resumes.jpg";

function Resume() {
  const buttonStyles = {
    width: "160px",
    fontSize: "16px",
    fontWeight: 600,
    color: "#333",
    cursor: "pointer",
    margin: "20px",
    height: "55px",
    textAlign: "center",
    border: "none",
    backgroundSize: "300% 100%",
    borderRadius: "50px",
    transition: "all 0.4s ease-in-out",
  };

  const buttonHoverStyles = {
    backgroundPosition: "100% 0",
    transition: "all 0.4s ease-in-out",
  };

  const buttonFocusStyles = {
    outline: "none",
  };

  const buttonCustomStyles = {
    background: "linear-gradient(to right, #29323c, #485563, #2b5876, #4e4376)",
    boxShadow: "0 4px 15px 0 rgba(45, 54, 65, 0.75)",
  };

  const imgStyle = {
    height: "600px", // Adjust the height as needed
    transition: "transform 0.2s", // Add a transition for smooth animation
  };

  const handleImageHover = (e) => {
    e.target.style.transform = "rotate(5deg)"; // Rotate the image when hovered
  };

  const handleImageLeave = (e) => {
    e.target.style.transform = "rotate(0deg)"; // Reset rotation on mouse leave
  };

  return (
    <div className="container my-3">
      <div className="text-center">
        <img
          src={Resumes}
          alt="My Resume"
          style={imgStyle}
          className="img-fluid"
          onMouseEnter={handleImageHover} // Apply hover effect
          onMouseLeave={handleImageLeave} // Reset on mouse leave
        />
        <div className="Button">
          <a href="/Akshay Resume.pdf" download="Akshay Resume.pdf">
            <button className="bn632-hover bn25" style={buttonStyles}>
              Download
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;
