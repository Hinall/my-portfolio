import React from "react";
import Header from "../src/Components/Header";
import Desc from "../src/Components/Desc";
import Clock from "./Components/Clock";

function App() {
  return (
    <div>
      <center>
        <Header />
        <Desc />
        <Clock />
      </center>
    </div>
  );
}

export default App;
