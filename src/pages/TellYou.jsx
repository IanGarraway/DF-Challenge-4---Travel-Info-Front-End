import WeatherDayBox from "../components/WeatherDayBox";
import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

import "./css/TellYou.css"

const TellYou = ({ destination, weatherData, setDestination }) => {

    const { selectedId } = useParams();    
    
    useEffect(() => {
        if (destination != selectedId) { setDestination(selectedId); }
    }, [selectedId, destination, setDestination]);
    
    

    let forecast = [];   

    console.log(weatherData);

    let weather;

    if (weatherData.length > 0) {
        for (let i = 1; i < 5; i++){
        forecast.push(
            <WeatherDayBox
                weather={weatherData[i]}
                key={i}
                className = "forecastBox"

            />
        ) 
        
    }
        weather = (
            <div>
                <div className="weatherToday">
                    <div className="spacer"></div>
                    <WeatherDayBox weather={weatherData[0]}
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
                <p>Loading Weather forecase...</p>
            </div>
        )
    }


    return (
        <div id = "tellingYouPage">
            <div id="content">
                <div className="title">
                    <h2>Telling you about...</h2>
                </div>
                <div className="cityName">
                    <h1>{destination}</h1>
                </div>
                {weather}        
            </div>
        </div>
        
    )
        
}

export default TellYou;