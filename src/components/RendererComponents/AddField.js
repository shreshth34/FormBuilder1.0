import React, { Component } from 'react'

const iconic = {
    padding: "18px"
}

const addField = {
  height: "54.4px",
  width: "406px",
  borderRadius: "4px",
  backgroundColor: "#FFFFFF",
  boxShadow: "0 1px 2px 0 rgba(34,36,38,0.15)"
}

const AddField =(props)=> {
   
    
        return (
        <div style={addField} id={props.id} >
            <div style={iconic}> <i class="blue plus circle icon"></i> </div>
        </div>
        )
    }


export default AddField

 