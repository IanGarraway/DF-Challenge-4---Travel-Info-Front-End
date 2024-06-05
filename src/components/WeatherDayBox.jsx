

const WeatherDayBox = (weather) => {
    
    //let d = new Date(Date.parse(weather.Date));//.toLocaleString('en-GB');
    const { date: date, icon: icon, weather_desc: weather_desc } = weather;
    let d = date
    const iconImage = `../../assets/weather-icons/${icon}.svg`;
    console.log(weather);
    console.log(date);

    
    return (
        <>
            <div> Today's weather: </div>
            <div>date{date}</div>
            <div><img src={iconImage}></img></div>
            <div>des{weather_desc}</div>
            
        </>
    );
    
}

export default WeatherDayBox;