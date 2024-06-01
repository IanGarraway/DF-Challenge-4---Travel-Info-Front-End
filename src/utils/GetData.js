import dummyHotel from "../../data/dummyHotelData.json"
import dummyUserLocations from "../../data/dummyUserLocations.json"
import dummyWeather from "../../data/dummyWeatherData.json"


class GetData {

    static hotel() {
        return dummyHotel;
    }

    static locations() {        
        return dummyUserLocations["User Locations"];
    }

    static weather() {
        return dummyWeather;
    }


}

export default GetData;