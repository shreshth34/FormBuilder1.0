import React, { Component } from "react";
import "../App.css";
import AddRow from "./RendererComponents/AddRow";


const addNewRow = () => {

    
}


export class Renderer extends Component {
  constructor(props) {
    super(props);

    this.state= {
        
    }
  }

  render() {
    return (
      <div className="renderer">
        <button onClick={addNewRow}> new row </button>
        <div className="header">
          {this.props.data[0].FormTitle} <br />
          {this.props.data[0].FormDescription}
        </div>
        <div className="ui two column grid" align="center">
         <AddRow />
        </div>
      </div>
    );
  }
}

export default Renderer;
