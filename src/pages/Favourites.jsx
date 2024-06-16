import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import FavTable from "../components/FavTable";

import "./css/Favourites.css"


const Favourites = ({ savedLocations, setSavedLocations, location, setLocation}) => {
        
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    const [favsTable, setFavsTable] = useState(null);    

    

    useEffect(() => {
        if (location != "Favourites") setLocation("Favourites");
        if (savedLocations != null) {
            setIsLoading(false);
        }
        if (savedLocations == null || savedLocations.length === 0) {
            setFavsTable(<div>are loading...</div>)
        } else {
            setFavsTable(<FavTable savedLocations={savedLocations} setSavedLocations={setSavedLocations} />);
        }
    }, [savedLocations, location]);

    
    if (isLoading) {
        return <div>Loading...</div>;
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
                    {favsTable}
                </div>
            </div>
        </div>
    );
    

}

export default Favourites;