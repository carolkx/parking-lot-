import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./thumb.css";
import thumbUpImage from "./thumbsUp.png";
import thumbDownImage from "./thumbsDown.png";

function Thumb() {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract the parking lot index from the location state
  const { index } = location.state;

  // Function to handle thumb up click (decrease crowdness)
  const handleThumbUpClick = () => {
    // Navigate back to the list with updated crowdness
    navigate("/ListOfParking", {
      state: {
        index,
        changeType: "thumbUp",
      },
    });
  };

  // Function to handle thumb down click (increase crowdness)
  const handleThumbDownClick = () => {
    // Navigate back to the list with updated crowdness
    navigate("/ListOfParking", {
      state: {
        index,
        changeType: "thumbDown",
      },
    });
  };

  return (
    <div className="ThumbPage App">
      <header>
        <h1 class="thumbheader">Give A Rating!</h1>
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