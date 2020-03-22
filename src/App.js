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
        { id:"text",
          type: "Text Field",
          icon: "small font icon"
        },
        { id:"desc",
          type: "Description",
          icon: "small circle icon"
        },
        {
          id:"link",
          type: "Link",
          icon: "small circle icon"
        },
        {
          id:"file",
          type: "File Upload",
          icon: "small circle icon"
        },
        {
          id:"email",
          type: "Email",
          icon: "small circle icon"
        },
        {
          id:"number",
          type: "Number",
          icon: "small circle icon"
        },
        {
          id:"radio",
          type: "Radio Button",
          icon: "small circle icon"
        },
        {
          id:"checkbox",
          type: "Checkbox",
          icon: "small circle icon"
        },
        {
          id:"select",
          type: "Dropdown",
          icon: "small circle icon"
        },
        {
          id:"datetime",
          type: "Date/Time",
          icon: "small circle icon"
        }
      ],
      PredefinedFields: [
        { id:"fname",
          type: "Firsts Name",
          icon: "small circle icon"
        },
        {
          id:"lname",
          type: "Last Name",
          icon: "small circle icon"
        },
        { id:"mname",
          type: "Middle Name",
          icon: "small circle icon"
        },
        {id:"resume",
          type: "Resume",
          icon: "small circle icon"
        }
      ],
      FormFormat: [
        // {
        //   type: "First Name",
        //   id: 22,
        //   uiElement:"Text Field",
        //   addedField:[]
        // },
        // {
        //   type: "Last Name",
        //   id: 33,
        //   uiElement:"Text Field",
        //   addedField:[]
        // },
        // {
        //   type: "Email",
        //   id: 44,
        //   uiElement:"Email",
        //   addedField:[]
        // },
        // {
        //   type: "Phone",
        //   id: 55,
        //   uiElement:"Number",
        //   addedField:[]
        // },
        // {
        //   type: "Resume",
        //   id: 66,
        //   uiElement:"File Upload",
        //   addedField:[]
        // },
      ]
    };
  }

  render() {
    const setFormFormat = e => {
      this.setState({
        FormFormat: [...this.state.FormFormat, e]
      });
    };
    const clickOnIt = () => {
      console.log("why you clicked");
    };
    const deleteElement =(e2)=>{
console.log("delete is working",e2)
      this.setState({
        FormFormat: e2
      })
    }
  

    const handleInput = e => {
      this.setState({
        FormTitle: e.target.value
      });
    };

    const handleDesc = e => {
      this.setState({
        FormDescription: e.target.value
      });
    };
    console.log(this.state)
    return (
      <div className="ui App">
        <div className="ui equal width stackable grid">
          <div className="six wide column">
            <Toolbox
              data={this.state.uiElements}
              predef={this.state.PredefinedFields}
            />
          </div>

          <div className="ten wide column">
            <Renderer
              data={this.state}
              changed={setFormFormat}
              deleteElement={deleteElement}
              changed2={handleInput}
              changedDesc={handleDesc}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
