import './thumb.css';
import thumbUpImage from './thumbsUp.png'; 
import thumbDownImage from './thumbsDown.png';

function Thumb() {
  
  return (
    <div className="App">
      <header className="App-header">
        <div>
      <h2>Give A Rating! </h2> 
      <h1> Was the parking lot decently empty? </h1>
      </div>
        <div className="thumb-button">
          <img
            src={thumbUpImage}
            alt="Thumb Up"
            className="thumb-button"
          />
          <img
            src={thumbDownImage}
            alt="Thumb Down"
            className="thumb-button"
          />
        </div>
      </header>
    </div>
  );
}

export default Thumb;
