import SavedLoc from "./SavedLoc"

import "./css/FavTable.css"

const FavTable = ({ savedLocations }) => {

    let favsList = [];

    savedLocations.forEach(savedLocation => {
        favsList.push(<SavedLoc savedLocation={savedLocation} key={savedLocation.id} />);
    });
    return (
        <>
            {favsList}        
        </>
    )
}

export default FavTable;