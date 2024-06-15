import axios from "axios";

import dummyHotel from "../../data/dummyHotelData.json"
import dummyUserLocations from "../../data/dummyUserLocations.json"


class GetData {

    static hotel() {
        return dummyHotel;
    }

    static locations() {        
        return dummyUserLocations["User Locations"];
    }

    static async weather(city) {
        try {
            console.log(city);
            const weatherData = await axios.get(`http://localhost:3000/about/?location=${city}`);
            console.log(weatherData.data);
            return weatherData.data;

        } catch (e) {
            console.log(e)
            return e;
        }
        
    }


}

export default GetData;