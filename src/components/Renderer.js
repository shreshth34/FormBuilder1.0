import React, { Component } from "react";
import "../App.css";
import AddRow from "./RendererComponents/AddRow";

export class Renderer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="renderer">
        <div className="header" >
          {this.props.data.FormTitle} <br />
          {this.props.data.FormDescription}   
        </div>
        <div className="ui two column grid" align="center">
          {this.props.data.FormFormat.map(element => {
            return <AddRow id={element.id} />;
          })}
        </div>
      </div>
    );
  }
}

export default Renderer;
