import WeatherDayBox from "../components/WeatherDayBox";
import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

import "./css/TellYou.css"
import FavouritesService from "../services/Favourites.service";
import FavouriteIcon from "../components/FavouriteIcon";

const TellYou = ({ destination, weatherData, setDestination, user, setSavedLocations, savedLocations, location, setLocation }) => {

    const { selectedId } = useParams();
    
    useEffect(() => {
        if (destination != selectedId) { setDestination(selectedId); }
        if (location != "TellYou") setLocation("TellYou");
    }, [selectedId, destination, setDestination, location]);  

    let forecast = [];  
    let weather;  

    if (weatherData == null) {
        weather = (<p className="tellingYouPage">Loading data</p>)
    } else if (weatherData.length > 0) {
        for (let i = 1; i < 5; i++){
            forecast.push(
                <WeatherDayBox
                    weather={weatherData[i]} msg={"Weather on:"}
                    key={i}
                    className="forecastBox"
                />
            );      
        }
        weather = (
            <div> 
                <div className="weatherToday">
                    
                    <WeatherDayBox weather={weatherData[0]} msg={"Weather today:"}
                        className="today" />
                    
                </div>
                <div className="weatherForecast">
                    
                    {forecast}
                    
                </div>
            </div>)
    } else {
        weather = (
            <div>
                <p>Loading Weather forecast...</p>
            </div>
        )
    }


    return (
        <div id="tellingYouPage">
            <div id="TYPcontent">
                <div id="TYPBox">
                    <div className="title">
                        <h2>Telling you about...</h2>
                    </div>
                    <div className="cityOuterContainer">
                        <div className="cityContainer">
                            <div className="saveFav">
                                {user != "" && <FavouriteIcon destination={destination} savedLocations={savedLocations} setSavedLocations={setSavedLocations} />}
                            </div>
                            <div className="cityName">
                                <h1>{destination}</h1>
                            </div>
                        </div>
                    </div>
                
                    {weather}
                </div>
            </div>
        </div>
        
    )
        
}

export default TellYou;