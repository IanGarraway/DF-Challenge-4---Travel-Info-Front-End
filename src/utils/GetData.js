import dummyHotel from "../../data/dummyHotelData.json"
import dummyUserLocations from "../../data/dummyUserLocations.json"
import dummyWeather from "../../data/dummyWeatherData.json"

import WeatherDataConverter from "./WeatherDataConverter.js"

class GetData {

    static hotel() {
        return dummyHotel;
    }

    static locations() {        
        return dummyUserLocations["User Locations"];
    }

    static weather() {
        return WeatherDataConverter(dummyWeather.dublin);
    }


}

export default GetData;