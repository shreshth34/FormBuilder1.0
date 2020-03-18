import React, { Component } from "react";
import "./App.css";
import Toolbox from "./components/Toolbox";
import Renderer from "./components/Renderer";

class App extends Component {
  constructor() {
    super();

    this.state = {
      FormTitle: "Untitled Form",
      FormDescription: "Form Description",

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
      ],
      PredefinedFields:[
        {
          type: "First Name",
          icon: "small circle icon"
        },
        {
          type: "Last Name",
          icon: "small circle icon"
        },
        {
          type: "Middle Name",
          icon: "small circle icon"
        },
        {
          type: "Resume",
          icon: "small circle icon"
        }


      ],
      FormFormat:[

      ]
    };
  }

  render() {
    return (
      <div className="App">
        <div className="ui two column stackable grid">
          <div className="column">
            <Toolbox data={this.state.uiElements} predef={this.state.PredefinedFields} />
          </div>
          <div className="column">
            <Renderer
              title={this.state.FormTitle}
              desc={this.state.FormDescription}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
