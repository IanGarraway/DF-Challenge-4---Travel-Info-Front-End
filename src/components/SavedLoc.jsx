import React from "react";
import "./css/SavedLoc.css"

const SavedLoc = ({ savedLocation }) => {
    const { id, name } = savedLocation;
    const dest = `/favourites/${name}`


    return (
        <div className="loc" >
            <img id = "delIcon" src="src\assets\images\free-delete-737-475058.png" />
            <a href={dest}>{name}</a>
        </div>
    );
    
}

export default SavedLoc;