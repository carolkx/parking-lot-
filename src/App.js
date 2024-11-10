import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>WELCOME TO</h1>
      <h1 class="lower">PARKING LOT</h1>
      <div class="parent">
        <img src="./parking.img.png" alt="parking photo" class="image1" />
        <img src="./car.img.png" alt="car photo" class="image2" />
      </div>
      <div class="start">
        <img src="./tBirdLeft.img.png" alt="bird photo" class="birdLeft" />

        <Link to="/ListOfParking">
          <button className="button">GET STARTED</button>
        </Link>

        <img src="./tBirdR.img.png" alt="bird photo" class="birdRight" />
      </div>
    </div>
  );
}

export default App;


