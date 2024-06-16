import React, {useEffect, useState} from "react";
import { Button } from "react-bootstrap";

import FavouritesService from "../services/Favourites.service";



const FavouriteIcon = ({ destination, savedLocations, setSavedLocations }) => {
    const [stored, setStored] = useState();    
    const saveIcon = `src/assets/images/unbookmarked.svg`
    const unSaveIcon = `src/assets/images/bookmarked.svg`

    const saveHandler = async() => {
        try {
            const res = await FavouritesService.add(destination);            
            if (res.status === 200) {                
                setSavedLocations(res.data.favourites);
            }
        } catch (e) {
            console.error(e.message);
        }
    }

    const removeHandler = async () => {
        try {
            const res = await FavouritesService.remove(stored);            
            if (res.status === 200) {                
                setSavedLocations(res.data.favourites);
            }
        } catch (e) {
            console.error(e.message);
        }
    }
    
    useEffect(() => {
        setStored(false);
        savedLocations.forEach(location => {
            if (location.name === destination) {
                setStored(location._id);
                
            }
        });
    }, [savedLocations]);
    

    if (stored) {
        return (
            <img id="saveBut" src={unSaveIcon} alt="save Location icon" onClick={removeHandler}></img>
        );
    }
    
    return <><img id="saveBut" src={saveIcon} alt="save Location icon" onClick={saveHandler}></img></>
    
}

export default FavouriteIcon;