import WeatherDayBox from "../components/WeatherDayBox";

const TellYou = ({ destination, weatherData }) => {


    return (
        <div>
            <div className="title">
                <h2>Telling you about...</h2>
            </div>
            <div className="cityName">
                <h1>{destination}</h1>
            </div>
            <div className="weatherToday">
                <WeatherDayBox weather ={weatherData[0]} />

            </div>
            <div className="weatherForecast">

            </div>
            
            <p>{console.log(weatherData)}</p>
            
            
            

        
        
        </div>
        
    )
        
}

export default TellYou;