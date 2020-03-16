import React, { Component } from 'react';
import './App.css';
import Toolbox from './components/Toolbox';
import Renderer from './components/Renderer'

class App extends Component {

  constructor() {
    super()

    this.state = {

    }
  }


  render() {
    return (
      <div className="App">
        <div className="ui equal width stackable grid">
          <div className="column">
            <Toolbox />
          </div>
          <div className="column">
            <div className="ui container">
            <Renderer />
            </div>
          </div>


        </div>
      </div>
    );
  }
}

export default App;
