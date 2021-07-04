import React, { Component } from "react";
import JokeList from "./JokeList";
import "./Appy.css";

class App extends Component {
  render() {
    return (
      <div className='Appy'>
        <JokeList />
      </div>
    );
  }
}

export default App;
