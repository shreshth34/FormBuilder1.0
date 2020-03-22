import React, { Component } from "react";



const iconic = {
  padding: "18px"

};


const addField = {

  width:"406px",
  borderRadius: "4px",
  backgroundColor: "#FFFFFF",
  boxShadow: "2px 2px 2px 2px lightblue"
  
};

class AddField extends Component {

  constructor(props){
    super(props)

  }


render(){
  return (
    <div style={addField} id={this.props.id}>
      <div style={iconic}>        
        <i class="blue plus circle icon" onClick={()=>this.props.insert(this.props.id)}></i>
        {/* <label>First Name</label><input type="text" />  */}
      </div>
      <button onClick={()=>this.props.delete(this.props.id)}>remove</button>
    </div>
  );
}
}

export default AddField;
