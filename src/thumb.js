import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./thumb.css";
import thumbUpImage from "./thumbsUp.png";
import thumbDownImage from "./thumbsDown.png";

function Thumb() {
  const navigate = useNavigate();

  const handleThumbUpClick = () => {
    navigate("/ListOfParking");
  };

  const handleThumbDownClick = () => {
    navigate("/ListOfParking");
  };

  return (
    <div className="App">
      <header>
        <h1>Give A Rating!</h1>
        <h2>Was the parking lot decently empty?</h2>
      </header>
      <div className="thumb-button">
        <img
          src={thumbUpImage}
          alt="Thumb Up"
          className="thumb-button"
          onClick={handleThumbUpClick}
        />
        <img
          src={thumbDownImage}
          alt="Thumb Down"
          className="thumb-button"
          onClick={handleThumbDownClick}
        />
      </div>
    </div>
  );
}

export default Thumb;
