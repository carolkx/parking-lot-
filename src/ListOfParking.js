import logo from "./logo.svg";
import "./carol.css";

function ListOfParkingDisplay() {
  return (
    <div>
      <h1 className="foo">Here is a list of all the parking lots at UBC.</h1>
      <h1>Please select the one you would like to rate</h1>
      <div id="welcomeImg" className="parking">
        <div className ="image-text">
            <img src="./orchardCommons.png" alt="Orchard Commons" className = "parkingLotImage" />
                <div className="locationCaption">
                    <h4>Orchard Commons</h4>
                    <p>Crowdness: </p>
                </div>
        </div>

        <div className ="image-text">
        <img src="./placeVanier.png" alt="Place Vanier" className = "parkingLotImage"/>
                <div className="locationCaption">
                    <h4>Place Vanier</h4>
                    <p>Crowdness: </p>
                </div>
        </div>

        <div className ="image-text">
        <img src="./totemPark.png" alt="Totem Park" className = "parkingLotImage"/>
                <div className="locationCaption">
                    <h4>Totem Park</h4>
                    <p>Crowdness: </p>
                </div>
        </div>

        <div className ="image-text">
            <img src="./walterGage.png" alt="Walter Gage" className = "parkingLotImage"/>
        </div>
                <div className="locationCaption">
                    <h4>Walter Gage</h4>
                    <p>Crowdness: </p>
                </div>
        </div>      

        
    </div>
  );
}

export default ListOfParkingDisplay;
