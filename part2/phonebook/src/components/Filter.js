import React from "react";

const Filter = ({changeHandler, pattern}) => {

    const handleFilterChange = (event)=>{
        changeHandler(event);
    }

    return (
    <div>
      filter: <input onChange={handleFilterChange} value={pattern} />
    </div>
  );
};

export default Filter;
