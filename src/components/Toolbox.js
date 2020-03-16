import React from "react";
import ToolboxNavbar from "./ToolboxNavbar";
import SearchComponent from './SearchComponent';
import BasicFields from './BasicFields'
import "../App.css";
import PreDefinedFields from "./PreDefinedFields";
import AddOns from "./AddOns";

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
