import { useNavigate } from "react-router";
import React, { useState } from "react";
import "./ListOfParking.css";

function ListOfParkingDisplay() {

  const navigate = useNavigate();

  const handleParkingClick = (index) => {
    navigate(`/thumb`)
  };

  return (
    <div className="layout">
      <h1 className="title">Here is a list of all the parking lots at UBC.</h1>
      <h1 className="directions">
        Please select the one you would like to rate:{" "}
      </h1>

      <div id="welcomeImg" className="parking">
        <div className="image-text" onClick={handleParkingClick}>
          <img
            src="./orchardCommons.png"
            alt="Place Vanier"
            className="parkingLotImage"
          />
          <div className="locationCaption">
            <h4>Orchard Commons</h4>
            <p>Crowdness: </p>
          </div>
        </div>

        <div className="image-text" onClick={handleParkingClick}>
          <img
            src="./placeVanier.png"
            alt="Place Vanier"
            className="parkingLotImage"
          />
          <div className="locationCaption">
            <h4>Place Vanier</h4>
            <p>Crowdness: </p>
          </div>
        </div>

        <div className="image-text" onClick={handleParkingClick}>
          <img
            src="./totemPark.png"
            alt="Totem Park"
            className="parkingLotImage"
          />
          <div className="locationCaption">
            <h4>Totem Park</h4>
            <p>Crowdness: </p>
          </div>
        </div>

        <div className="image-text" onClick={handleParkingClick}>
          <img
            src="./walterGage.png"
            alt="Totem Park"
            className="parkingLotImage"
          />
          <div className="locationCaption">
            <h4>Walter Gage</h4>
            <p>Crowdness: </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListOfParkingDisplay;
