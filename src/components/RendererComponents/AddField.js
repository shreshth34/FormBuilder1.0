import React, { Component } from "react";

const iconic = {
  padding: "18px"

};


const addField = {
  
  padding: "18px",
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

  if(this.props.addedField[0].uiElement === undefined){
  return (
    <div style={addField} id={this.props.id}>        

      <div style={iconic}>        
       <i class="blue plus circle icon" onClick={()=>this.props.insert(this.props.id)}></i>
        {/* <label>First Name</label><input type="text" />  */}
        </div>
      <button onClick={()=>this.props.delete(this.props.id)}>remove</button>
    </div>
  )
  }else{
    return (
      <div style={addField} id={this.props.id}>        

      <label style={iconic} htmlFor={this.props.addedField[0].id}>{this.props.addedField[0].label}</label><input type={this.props.addedField[0].data_type} />
      
      <button onClick={()=>this.props.delete(this.props.id)}>edit</button>
    </div>  )
  }

}

}

export default AddField;
