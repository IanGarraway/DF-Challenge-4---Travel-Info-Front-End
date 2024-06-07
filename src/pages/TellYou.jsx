import WeatherDayBox from "../components/WeatherDayBox";

import "./css/TellYou.css"

const TellYou = ({ destination, weatherData }) => {

    let forecast = [];

    for (let i = 1; i < 5; i++){
        forecast.push(
            <WeatherDayBox
                weather={weatherData[i]}
                key={i}
                className = "forecastBox"

            />
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
            
               
            
            
            

        
        
            </div>
        </div>
        
    )
        
}

export default TellYou;