import logo from "./logo.svg";
import "./carol.css";

function ListOfParkingDisplay() {
  return (
    <div>
      <h1 className="foo">Here is a list of all the parking lots at UBC.</h1>
      <h1>Please select the one you would like to rate</h1>
      <div id="welcomeImg" className="parking">
        <img src="./orchardCommons.png" alt="Orchard Commons" className = "parkingLotImage" />
        <div className="text">
          <h4>Orchard Commons</h4>
          <p>This is a residential building.</p>
          </div>
        <img src="./placeVanier.png" alt="Place Vanier" className = "parkingLotImage"/>
        <img src="./totemPark.png" alt="Totem Park" className = "parkingLotImage"/>
        <img src="./walterGage.png" alt="Walter Gage" className = "parkingLotImage"/>
      </div>
    </div>
  );
}

export default ListOfParkingDisplay;
