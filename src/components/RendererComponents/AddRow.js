import React from "react";
import AddField from './AddField'

const AddRow = () => {
  return (

      <div className="row">
        <div className="column">
          <AddField />
        </div>
        <div className="column">
          <AddField />
        </div>
      </div>
    
  );
};

export default AddRow;
