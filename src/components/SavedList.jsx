import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

//import "./SavedList.css"

function SavedList({ savedLocations }) {
    return (
        <Dropdown >
            <Dropdown.Toggle variant="success" id="dropdown-basic" className = "headerButtons">
                Favourites
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Place</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another Place</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Some other Place</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-4">Favourites</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default SavedList;
