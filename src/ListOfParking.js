import logo from "./logo.svg";
import "./App.css";

function ListOfParkingDisplay() {
  return (
    <div>
      <h1>Here is a list of all the parking lots at UBC.</h1>
      <h1>Please select the one you would like to rate</h1>
      <div id="welcomeImg">
        <img src="./orchardCommons.png" alt="Orchard Commons" />
        <img src="./placeVanier.png" alt="Place Vanier" />
      </div>
    </div>
  );
}

export default ListOfParkingDisplay;
