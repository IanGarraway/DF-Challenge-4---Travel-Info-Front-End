import React from "react";

import "./css/WeatherDayBox.css"

const WeatherDayBox = ({ weather, msg }) => {
    if(!weather){return <div>Loading...</div>}
    
    const { date, icon, weather_desc } = weather;
    let d = new Date(date).toLocaleDateString("en-GB");
    const iconImage = `../../assets/weather-icons/${icon}.svg`;


    
    return (
        <>
            <div className="weatherBox">
                <div> {msg} </div>
                <div>{d}</div>
                <div id="weatherImage"><img src={iconImage}></img></div>
                <div>{weather_desc}</div>
            </div>
            
        </>
    );
    
}



export default WeatherDayBox;