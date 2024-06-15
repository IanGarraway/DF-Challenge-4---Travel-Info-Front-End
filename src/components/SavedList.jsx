import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import SavedListRow from "./SavedListRow";
import { NavLink } from "react-bootstrap";
import { NavItem } from "react-bootstrap";

//import "./SavedList.css"

const SavedList = ({ savedLocations }) => {

    let dropDownItems = [];

    console.log(savedLocations.length);

    if(!savedLocations.length>0){return <div>loading favourites</div>}

    savedLocations.forEach(savedLocation => {
        
        dropDownItems.push(<SavedListRow savedLocation={savedLocation} key={savedLocation.id}/>);
        
    });

    return (
        <>
            <Dropdown as={NavItem}>
                <Dropdown.Toggle as={NavLink}  id="dropdown-basic" className = "headerButtons">
                    Favourites
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {dropDownItems}
                    <Dropdown.Divider />
                    <Dropdown.Item href="/favourites">Favourites</Dropdown.Item>
                </Dropdown.Menu>                
            </Dropdown>
        </>
    );
}

export default SavedList;