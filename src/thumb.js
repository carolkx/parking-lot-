import "./thumb.css";
import thumbUpImage from "./thumbsUp.png";
import thumbDownImage from "./thumbsDown.png";

function Thumb() {
  return (
    <div className="App">
      <header>
          <h1>Give A Rating! </h1>
          <h2> Was the parking lot decently empty? </h2>
          </header>
        <div className="thumb-button">
          <img src={thumbUpImage} alt="Thumb Up" className="thumb-button" />
          <img src={thumbDownImage} alt="Thumb Down" className="thumb-button" />
        </div>
    </div>
  );
}

export default Thumb;
