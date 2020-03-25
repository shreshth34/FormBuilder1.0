import React, { Component } from "react";
import "./App.css";
import Toolbox from "./components/Toolbox";
import Renderer from "./components/Renderer";
import AddField from "./components/RendererComponents/AddField";

class App extends Component {
  constructor() {
    super();

    this.state = {
      FormTitle: "Untitled Form",
      FormDescription: "Form Description",

      uiElements: [
        { id: "text", type: "Text Field", icon: "small font icon" },
        { id: "desc", type: "Description", icon: "small circle icon" },
        {
          id: "link",
          type: "Link",
          icon: "small circle icon"
        },
        {
          id: "file",
          type: "File Upload",
          icon: "small circle icon"
        },
        {
          id: "email",
          type: "Email",
          icon: "small circle icon"
        },
        {
          id: "number",
          type: "Number",
          icon: "small circle icon"
        },
        {
          id: "radio",
          type: "Radio Button",
          icon: "small circle icon"
        },
        {
          id: "checkbox",
          type: "Checkbox",
          icon: "small circle icon"
        },
        {
          id: "select",
          type: "Dropdown",
          icon: "small circle icon"
        },
        {
          id: "datetime",
          type: "Date/Time",
          icon: "small circle icon"
        }
      ],
      PredefinedFields: [
        {
          id: "fname",
          label: "First Name",
          data_type: "text",
          icon: "small circle icon",
          uiElement: "Text Field"
        },
        {
          id: "lname",
          label: "Last Name",
          data_type: "text",
          icon: "small circle icon",
          uiElement: "Text Field"
        },
        {
          id: "mname",
          label: "Middle Name",
          data_type: "text",
          icon: "small circle icon",
          uiElement: "Text Field"
        },
        {
          id: "resume",
          data_type: "file",
          label: "Resume",
          icon: "small circle icon",
          uiElement: "File Upload"
        }
      ],
      FormFormat: [
        // {
        //   id: 22,
        //   addedField: [{
        //     id:"input1",
        //     label:"First Name",
        //     data_type:"text",
        //     uiElement:"Text Field"
        //   }]
        // },
        // {
        //   id: 33,
        //   addedField:[{
        //     id:"input2",
        //     label:"Age",
        //     data_type:"number",
        //     uiElement:"Number"
        //   }]
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
      console.log("here is e", e);
      this.setState({
        FormFormat: [ ...this.state.FormFormat, e]
      });
    };

    const deleteElement = e2 => {
      this.setState({
        FormFormat: e2
      });
    };

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

    let displayArr = 0;
    let insertEvent = index => {
      const saveToId = index;
      displayArr = saveToId;
    };

    const selectField1 = index1 => {
      console.log("djdhd", index1);
      let filt1 = this.state.PredefinedFields.filter(e => {
        return e.id === index1;
      });

      this.state.FormFormat.map(elem => {
        if (elem.id === displayArr) {
          elem.addedField[0].id = displayArr;
          elem.addedField[0].label = filt1[0].label;
          elem.addedField[0].data_type = filt1[0].data_type;
          elem.addedField[0].uiElement = filt1[0].uiElement;

          console.log(
            "here is what we got in elem ater setting form filt",
            elem
          );

          return changeInsertState(elem);
        }
      });
    };

    let changeInsertState = p => {
      this.state.FormFormat.map(e => {
        if (e.id === p.id) {
          this.setState({
            ...this.state.FormFormat,
            p
          });
        }
      });
    };

    return (
      <div className="ui App">
        <div className="ui equal width stackable grid">
          <div className="six wide column">
            <Toolbox
              data={this.state.uiElements}
              predef={this.state.PredefinedFields}
              selectedFieldFromApp={selectField1}
            />
          </div>

          <div className="ten wide column">
            <Renderer
              data={this.state}
              changed={setFormFormat}
              deleteElement={deleteElement}
              changed2={handleInput}
              changedDesc={handleDesc}
              insert={insertEvent}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
