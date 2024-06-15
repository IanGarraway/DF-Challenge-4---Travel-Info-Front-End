import React from "react";
import SavedLoc from "./SavedLoc"

import "./css/FavTable.css"

const FavTable = ({ savedLocations }) => {

    let favsList = [];

    
    favsList = savedLocations.map(savedLocation => (
        <SavedLoc key={savedLocation._id} savedLocation={savedLocation} />
    ));
    
    return (
        <>
            {favsList}        
        </>
    )
}

export default FavTable;