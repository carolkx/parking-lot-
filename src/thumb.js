import './App.css';
import thumbUpImage from './thumbsUp.png'; 
import thumbDownImage from './thumbsDown.png';

function Thumb() {
  
  return (
    <div className="App">
      <header className="App-header">
      <h1>Give A Rating! Was the parking lot decently empty? </h1>
        <div className="buttons-container">
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
