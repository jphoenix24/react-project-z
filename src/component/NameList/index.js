import React, { useState, useEffect } from "react";
import NameElement from "../NameElement";
import { TextField } from "@material-ui/core";

function NameList(props) {
    const {nameList, onClick} = props;
  const [filterName, setFilterName] = useState([...nameList]);
   
  useEffect(() => {
    setFilterName([...nameList]);
    console.log("===");
  }, [nameList]);

  const onChange = (e) => {
    const userInput = e.target.value;
    const filteredOptions = nameList.filter(
      (name) =>
        name.first_name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    setFilterName([...filteredOptions]);
  };

  return (
    <div className="mainBody">
      <div className="searchBox">
        <TextField
          label="Enter another name"
          fullWidth
          InputProps={{
            classes: {
                input: "inputField",
            },
          }}
          onChange={(e) => onChange(e)}
        />
      </div>
      <div className="nameList">
        {filterName.map((name, index) => (
          <NameElement name={name} onClick={() => onClick(name)} key={index} />
        ))}
      </div>
    </div>
  );
}

export default NameList;
