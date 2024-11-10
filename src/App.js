import "./App.css";

function App() {
  return (
    <div>
      <h1>WELCOME TO</h1>
      <h1>PARKING LOT</h1>
      <div class="parent">
        <img src="./parking.img.png" alt="parking photo" class="image1" />
        <img src="./car.img.png" alt="car photo" class="image2" />
      </div>
      <div class="start">
        <img src="./tBirdLeft.img.png" alt="bird photo" class="birdLeft" />

        <a href="thumbs.js"><button class="button">GET STARTED</button></a>

        <img src="./tBirdR.img.png" alt="bird photo" class="birdRight" />
      </div>
    </div>
  );
}

export default App;
