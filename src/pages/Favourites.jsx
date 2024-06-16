import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import FavTable from "../components/FavTable";

import "./css/Favourites.css"


const Favourites = ({ savedLocations, setSavedLocations, location, setLocation}) => {

    if (location != "Favourites") setLocation("Favourites");
    
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (savedLocations != null) {
            setIsLoading(false);
        }
    }, [savedLocations]);

    useEffect(() => {
        if (!isLoading && (savedLocations == null || savedLocations.length === 0)) {
           // navigate("/");
        }
    }, [isLoading, savedLocations, navigate]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (savedLocations == null || savedLocations.length === 0) {
        return null;
    }


    return (
        <div id="favourites">
            <div className="content">
                <div className="title">
                    <h2>Telling you about...</h2>
                </div>
                <div className="title">
                    <h1>Your Favorites</h1>
                </div>
                <div className="favsTable">
                    <FavTable savedLocations={savedLocations} setSavedLocations={setSavedLocations} />
                </div>
            </div>
        </div>
    );
    

}

export default Favourites;