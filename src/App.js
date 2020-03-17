import React, { Component } from "react";
import "./App.css";
import Toolbox from "./components/Toolbox";
import Renderer from "./components/Renderer";

class App extends Component {
  constructor() {
    super();

    this.state = {
      FormTitle:"Untitled Form",
      FormDescription:"Form Description",

      uiElements: [
        {
          type: "Text Field",
          icon: "small font icon"
        },
        {
          type: "Description",
          icon: "small circle icon"
        },
        {
          type: "Link",
          icon: "small circle icon"
        },
        {
          type: "File Upload",
          icon: "small circle icon"
        },
        {
          type: "Email",
          icon: "small circle icon"
        },
        {
          type: "Number",
          icon: "small circle icon"
        },
        {
          type: "Radio Button",
          icon: "small circle icon"
        },
        {
          type: "Checkbox",
          icon: "small circle icon"
        },
        {
          type: "Dropdown",
          icon: "small circle icon"
        },
        {
          type: "Date/Time",
          icon: "small circle icon"
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <div className="ui stackable grid">
          <div className="four wide column">
            <Toolbox data={this.state.uiElements} />
          </div>
          <div className="twelve wide column">
            <div className="ui container">
              <Renderer title={this.state.FormTitle} desc={this.state.FormDescription} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;