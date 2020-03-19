import React from "react";
import ToolboxNavbar from "./ToolboxComponents/ToolboxNavbar";
import SearchComponent from './ToolboxComponents/SearchComponent';
import BasicFields from './ToolboxComponents/BasicFields'
import "../App.css";
import PreDefinedFields from "./ToolboxComponents/PreDefinedFields";
import AddOns from "./ToolboxComponents/AddOns";

const Toolbox =(props) => {
  return (
      <div className="toolbox">
          
        <ToolboxNavbar />
        <SearchComponent />
        <BasicFields data={props.data}/>
        <PreDefinedFields predef={props.predef} />
        <AddOns />
        
      </div>
    );
  
}

export default Toolbox;
