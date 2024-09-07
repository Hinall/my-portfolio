import React from "react";
import Display from "./Components/Display";
import ButtonContainer from "./Components/ButtonContainer";
import "../src/App.css";
function App() {
  return (
    <center>
      <div className="calContainer">
        <Display />
        <ButtonContainer />
      </div>
    </center>
  );
}

export default App;
