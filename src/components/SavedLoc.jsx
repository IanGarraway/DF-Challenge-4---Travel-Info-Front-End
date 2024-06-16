import React from "react";
import "./css/SavedLoc.css"
import FavouritesService from "../services/Favourites.service";

const SavedLoc = ({ savedLocation, setSavedLocations }) => {
    const { _id, name } = savedLocation;
    const dest = `/favourites/${name}`

    const removeHandler = async() => {
        try {
            
            const response = await FavouritesService.remove(_id)
            console.log(response, `<--response`);
            if (response.status == 200) {
                console.log(response.favourites, `<---`);
                setSavedLocations(response.data.favourites);
            }
        } catch (e) {
            
        }
    }


    return (
        <div className="loc" >
            <img id = "delIcon" src="src\assets\images\free-delete-737-475058.png" onClick={removeHandler}/>
            <a href={dest}>{name}</a>
        </div>
    );
    
}

export default SavedLoc;