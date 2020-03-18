import React from "react";
import AddField from './AddField'

const AddRow = (props) => {
  return (

      <div className="row">
        <div className="column">
          <AddField id={props.id} />
        </div>
        <div className="column">
          <AddField id={props.id} />
        </div>
      </div>
    
  );
};

export default AddRow;
