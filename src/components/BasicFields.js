import React, { Component } from "react";
import "../App.css";
import FieldDiv from "./FieldDiv";

export class BasicFields extends Component {
  constructor(props) {
    super(props);
    this.state={
      display_grid:"none",
      basicIcon: "chevron right icon"
    }
    this.toggle_basic=this.toggle_basic.bind(this)
  }
  toggle_basic(){
    this.setState({display_grid:this.state.display_grid==="none"?"block":"none",
    basicIcon: this.state.basicIcon==="chevron down icon"?"chevron right icon":"chevron down icon"
  })

  }

  render() {
    const pStyle = {
      width: "88px",
      color: "#2EA3C8",
      fontFamily: "Roboto",
      fontSize: "14px",
      lineHeight: "19px"
    };

    const angleIcon = {
      height: "8.75px",
      width: "60px",
      color: "#33A5C9"
    };

    return (
      <div className="ui grid" id="basic_fields">
        <div className="row" id="row1" onClick={this.toggle_basic}>
          <div className="thirteen wide column">
            <p style={pStyle}> Basic Fields </p>
          </div>
          <div className="three wide column">
            <span className="FormBuilderText" id="show_icon">
              <i style={angleIcon} class={this.state.basicIcon}></i>
            </span>
          </div>
        </div>
        <div id="display_grid" className="ui grid my_grid" style={{display:this.state.display_grid}} >
          {this.props.data.map(e => {
            return (
              <div className="eight wide column">
                <FieldDiv icon={e.icon} type={e.type} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default BasicFields;
