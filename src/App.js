import './thumb.css';
import thumbUpImage from './thumbsUp.png';  
import thumbDownImage from './thumbsDown.png';

function App() {
  

  return (
    <div className="App">
      <header className="App-header">
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

export default App;
