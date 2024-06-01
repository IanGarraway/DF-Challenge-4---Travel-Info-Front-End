import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const SavedListRow = ({ savedLocation }) => {
    const { id, name } = savedLocation; 
    console.log(`location: ${savedLocation}`);

    return <Dropdown.Item href={`#/find/${name}`}>{name}</Dropdown.Item>;
};

export default SavedListRow;