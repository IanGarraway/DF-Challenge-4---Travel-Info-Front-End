import React from "react";
import SavedLoc from "./SavedLoc"

import "./css/FavTable.css"

const FavTable = ({ savedLocations, setSavedLocations }) => {

    let favsList = [];

    if (savedLocations.length === 0) { return (<div>Loading data</div>) }
    favsList = savedLocations.map(savedLocation => (
        <SavedLoc key={savedLocation._id} savedLocation={savedLocation} setSavedLocations={setSavedLocations} />
    ));
    
    return (
        <>
            {favsList}        
        </>
    )
}

export default FavTable;