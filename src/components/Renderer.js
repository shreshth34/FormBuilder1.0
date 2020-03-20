import React, { Component } from "react";
import "../App.css";
import AddRow from "./RendererComponents/AddRow";
import AddField from "./RendererComponents/AddField";
const title1 = {

  border: "1px solid white",
  height: "37px",
  color: "#4A4A4A",
  fontFamily: "Roboto",
  fontSize: "28px",
  lineHeight: "37px"

};

const desc1 = {
  
  border: "1px solid white",
  height: "19px",
  color: "#9B9B9B",
  fontFamily: "Roboto",
  fontSize: "14px",
  lineHeight: "19px"
  
};

export class Renderer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const addNewRow = () => {
      return this.props.changed({ pos: "" });
    };

   
    const addNewColumn = () => {

        return this.props.changed({
                  
        type:"",
        id:`${Math.random().toString(36).substr(2, 9)}`,
        uiElement:"",
        addedField:[]
    
      });
    };

    const deleteEvent = (index) => {
      const copyFormFormat = Object.assign([], this.props.data.FormFormat); 
      copyFormFormat.splice(index, 1);
      
      return this.props.input1(copyFormFormat)
      
    }
    // const sendToApp = (e1) => {
    //   return this.props.changed2(e1)
    // }

    return (
      <div className="renderer">
        <div className="header">
          <div contenteditable="true" style={title1} type="text">
            {this.props.data.FormTitle}
          </div>
          <br />
          <p contenteditable="true" style={desc1} type="text">
            {this.props.data.FormDescription}
          </p>
          <button className="ui primary button" onClick={addNewColumn}>
            New Column
          </button>
          <button className="ui primary button" onClick={addNewRow}>
            New Row
          </button>
        </div>
        <br />
        <br />
        <br />

        <div
          className="ui equal width column stackable grid"
          align="center"
        >
          {this.props.data.FormFormat.map((element, index) => {
            if (element.pos === undefined) {
              return (
                <div className="column">
                  <AddField id={element.id} delete={deleteEvent} key={element.id}/>
                  <br />  
                </div>
              );
            } else {
              return <div className="row">
                
              </div>;
            }
          })}
        </div>
      </div>
    );
  }
}

export default Renderer;
