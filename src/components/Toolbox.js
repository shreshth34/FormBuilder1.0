import React from "react";
import ToolboxNavbar from "./ToolboxComponents/ToolboxNavbar";
import SearchComponent from './ToolboxComponents/SearchComponent';
import BasicFields from './ToolboxComponents/BasicFields'
import "../App.css";
import PreDefinedFields from "./ToolboxComponents/PreDefinedFields";
import AddOns from "./ToolboxComponents/AddOns";

const Toolbox =(props) =>{
  console.log("toolbox",props.data)  
  return (
      <div className="toolbox">
          
        <ToolboxNavbar />
        <SearchComponent />
        <BasicFields data={props.data}/>
        <PreDefinedFields />
        <AddOns />
         
      </div>
    );
  
}

export default Toolbox;
