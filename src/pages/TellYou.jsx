import WeatherDayBox from "../components/WeatherDayBox";
import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

import "./css/TellYou.css"
import FavouritesService from "../services/Favourites.service";

const TellYou = ({ destination, weatherData, setDestination, user }) => {

    const { selectedId } = useParams();    
    
    useEffect(() => {
        if (destination != selectedId) { setDestination(selectedId); }
    }, [selectedId, destination, setDestination]);
    
    const saveIcon = `src/assets/images/saveIcon.png`

    let forecast = [];  
    let weather;

    const saveHandler = async() => {
        try {
            const res = await FavouritesService.add(destination);
        } catch (e) {
            console.error(e.message);
        }
    }

    if (weatherData.length > 0) {
        for (let i = 1; i < 5; i++){
            forecast.push(
                <WeatherDayBox
                    weather={weatherData[i]} msg={"Weather on:"}
                    key={i}
                    className = "forecastBox"
                />
            )         
        }
        weather = (
            <div>
                <div className="weatherToday">
                    <div className="spacer"></div>
                    <WeatherDayBox weather={weatherData[0]} msg={"Weather today:"}
                        className="today" />
                    <div className="spacer"></div>
                </div>
                <div className="weatherForecast">
                    <div className="spacer" />
                    {forecast}
                    <div className="spacer" />
                </div>
            </div>);
    } else {
        weather = (
            <div>
                <p>Loading Weather forecast...</p>
            </div>
        )
    }


    return (
        <div id="tellingYouPage">
            <div id="content">
                <div className="title">
                    <h2>Telling you about...</h2>
                </div>
                <div className="cityContainer">
                    <div className="saveFav">
                        {user != "" && <button><img id="saveBut" src={saveIcon} alt="save Location icon" onClick={saveHandler}></img></button>}
                    </div>
                    <div className="cityName">
                        <h1>{destination}</h1>
                    </div>
                </div>
                
                {weather}
            </div>
        </div>
        
    )
        
}

export default TellYou;