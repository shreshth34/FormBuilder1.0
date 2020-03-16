import React, { Component } from "react";
import "../App.css";
const showFieldsOnClick = () => {
    console.log("you clicked me")
}

export class PreDefinedFields extends Component {
  render() {
   

    const pStyle = {
      height: "19px",
      width: "120px",
      color: "#2EA3C8",
      fontFamily: "Roboto",
      fontSize: "14px",
      lineHeight: "19px",
      marginLeft: "5px"
    };

    const angleIcon = {
      height: "8.75px",
      width: "60px",
      color: "#33A5C9"
    };

    return (
      <div className="ui grid" id="basic_fields" onClick={showFieldsOnClick}>
        <div className="thirteen wide column">
          <p style={pStyle}>Pre - defined Fields</p>
        </div>
        <div className="three wide column">
          <span className="FormBuilderText" id="show_icon">
            <i style={angleIcon} class="chevron right icon"></i>
          </span>
        </div>

        <div></div>
      </div>
    );
  }
}

export default PreDefinedFields;
