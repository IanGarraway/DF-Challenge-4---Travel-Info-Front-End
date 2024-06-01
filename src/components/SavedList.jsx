import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import SavedListRow from "./SavedListRow";

//import "./SavedList.css"

const SavedList = ({ savedLocations }) => {

    let dropDownItems = [];

    savedLocations.forEach(savedLocation => {
        
        dropDownItems.push(<SavedListRow savedLocation={savedLocation} key={savedLocation.id}/>);
        
    });

    return (
        <>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic" className = "headerButtons">
                    Favourites
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {dropDownItems}
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-4">Favourites</Dropdown.Item>
                </Dropdown.Menu>                
            </Dropdown>
        </>
    );
}

export default SavedList;