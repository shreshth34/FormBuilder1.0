import React from "react";

const iconic = {
  padding: "18px",

};


const addField = {

  borderRadius: "4px",
  backgroundColor: "#FFFFFF",
  boxShadow: "2px 2px 2px 2px lightblue"
  
};

const AddField = props => {
  return (
    <div style={addField} id={props.id}>
      <div style={iconic}>        
        <i class="blue plus circle icon"></i>{" "}
      </div>
    </div>
  );
};

export default AddField;
