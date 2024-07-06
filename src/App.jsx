import { useState } from "react";
import "./App.css";

function App() {
  const [displayMesasge, setDisplayMessage] = useState("Greeting Message")
  const [message, setMessage] = useState("")

  return (
    <div className="App">
      <div className="greeting-container">{displayMesasge}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input id="greeting-message" type="text" onChange={e => setMessage(e.target.value)}/>
      </div>

      <div className="buttons">
        <button onClick={() => setDisplayMessage(message)}>Update text</button>
      </div>
    </div>
  );
}

export default App;
