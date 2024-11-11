import { useNavigate, useLocation } from "react-router";
import React, { useState, useEffect } from "react";
import "./ListOfParking.css";

// Custom hook to manage localStorage
const UseLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

function ListOfParkingDisplay() {
  const navigate = useNavigate();
  const location = useLocation();

  // Initialize state for each parking lot using the custom hook
  const [thunderbirdCrowdness, setThunderbirdCrowdness] = UseLocalStorage(
    "ThunderbirdParkade",
    0
  );
  const [orchardCommonsCrowdness, setOrchardCommonsCrowdness] = UseLocalStorage(
    "OrchardCommons",
    0
  );
  const [placeVanierCrowdness, setPlaceVanierCrowdness] = UseLocalStorage(
    "PlaceVanier",
    0
  );
  const [totemParkCrowdness, setTotemParkCrowdness] = UseLocalStorage(
    "TotemPark",
    0
  );
  const [walterGageCrowdness, setWalterGageCrowdness] = UseLocalStorage(
    "WalterGage",
    0
  );

  // Array to store the crowdness level and corresponding set function for each parking lot
  const parkingLots = [
    {
      name: "Thunderbird Parkade",
      crowdness: thunderbirdCrowdness,
      setCrowdness: setThunderbirdCrowdness,
    },
    {
      name: "Orchard Commons",
      crowdness: orchardCommonsCrowdness,
      setCrowdness: setOrchardCommonsCrowdness,
    },
    {
      name: "Place Vanier",
      crowdness: placeVanierCrowdness,
      setCrowdness: setPlaceVanierCrowdness,
    },
    {
      name: "Totem Park",
      crowdness: totemParkCrowdness,
      setCrowdness: setTotemParkCrowdness,
    },
    {
      name: "Walter Gage",
      crowdness: walterGageCrowdness,
      setCrowdness: setWalterGageCrowdness,
    },
  ];

  // Function to handle parking lot selection
  const handleParkingClick = (index) => {
    navigate(`/thumb`, { state: { index } });
  };

  // Effect to handle updating crowdness based on navigation state
  useEffect(() => {
    if (
      location.state &&
      location.state.index !== undefined &&
      location.state.changeType
    ) {
      const { index, changeType } = location.state;

      parkingLots.forEach((lot, i) => {
        if (i === index) {
          if (changeType === "thumbUp") {
            // Decrease crowdness
            const decreaseIndex = - 2 / (2 * Math.sqrt(10.5 - lot.crowdness));
            lot.setCrowdness((prevCrowdness) =>
              Math.max(0, prevCrowdness + decreaseIndex)
            );
          } else if (changeType === "thumbDown") {
            // Increase crowdness
            const increaseIndex = 2 / (2 * Math.sqrt(lot.crowdness + 0.5));
            lot.setCrowdness((prevCrowdness) =>
              Math.min(10, prevCrowdness + increaseIndex)
            );
          }
        }
      });

      // Clear the state after processing to prevent repeated updates
      navigate("/ListOfParking", { replace: true, state: {} });
    }
  }, [location.state, navigate, parkingLots]);

  return (
    <div className="layout">
      <h1 className="title">Here is a list of all the parking lots at UBC.</h1>
      <h1 className="directions">
        Please select the one you would like to rate:
      </h1>
      <div id="parking" className="parking">
        <div className="image-text" onClick={() => handleParkingClick(0)}>
          <img
            src="./thunderbird.png"
            alt="Thunderbird Parkade"
            className="parkingLotImage"
          />
          <div className="locationCaption">
            <h4>Thunderbird Parkade</h4>
            <p>Crowdedness: {thunderbirdCrowdness.toFixed(1)}</p>
          </div>
        </div>

        <div className="image-text" onClick={() => handleParkingClick(1)}>
          <img
            src="./orchardCommons.png"
            alt="Orchard Commons"
            className="parkingLotImage"
          />
          <div className="locationCaption">
            <h4>Orchard Commons</h4>
            <p>Crowdedness: {orchardCommonsCrowdness.toFixed(1)}</p>
          </div>
        </div>

        <div className="image-text" onClick={() => handleParkingClick(2)}>
          <img
            src="./placeVanier.png"
            alt="Place Vanier"
            className="parkingLotImage"
          />
          <div className="locationCaption">
            <h4>Place Vanier</h4>
            <p>Crowdedness: {placeVanierCrowdness.toFixed(1)}</p>
          </div>
        </div>

        <div className="image-text" onClick={() => handleParkingClick(3)}>
          <img
            src="./totemPark.png"
            alt="Totem Park"
            className="parkingLotImage"
          />
          <div className="locationCaption">
            <h4>Totem Park</h4>
            <p>Crowdedness: {totemParkCrowdness.toFixed(1)}</p>
          </div>
        </div>

        <div className="image-text" onClick={() => handleParkingClick(4)}>
          <img
            src="./walterGage.png"
            alt="Walter Gage"
            className="parkingLotImage"
          />
          <div className="locationCaption">
            <h4>Walter Gage</h4>
            <p>Crowdedness: {walterGageCrowdness.toFixed(1)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListOfParkingDisplay;
