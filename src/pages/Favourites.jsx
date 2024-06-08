import FavTable from "../components/FavTable";

import "./css/Favourites.css"


const Favourites = ({ savedLocations }) => {
    return (
        <div id="favourites">
            <div id="content">
                <div className="title">
                    <h2>Telling you about...</h2>
                </div>
                <div className="title">
                    <h1>Your Favorites</h1>
                </div>
                <div className="favsTable">
                    <FavTable savedLocations={savedLocations} />
                </div>
            </div>
        </div>
    );
    

}

export default Favourites;