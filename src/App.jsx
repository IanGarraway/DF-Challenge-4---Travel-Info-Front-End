import React, {useState, useEffect} from "react";

//pages
import Login from "./pages/Login.jsx";
import HomePage from "./pages/HomePage.jsx"

//components
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";


//utilities
import GetData from "./utils/GetData.js";
import TellYou from "./pages/TellYou.jsx";

const App = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [location, setLocation] = useState(["a"]);
    const [destination, setDestination] = useState("Dublin");
    const [savedLocations, setSavedLocations] = useState([]);
    const [user, setUser] = useState({});
    const [weatherData, setWeatherData] = useState([]);
 
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
 
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const getLocations = () => {
        setSavedLocations(GetData.locations());
    }

    const getWeather = () => {
        setWeatherData(GetData.weather());
        console.log(weatherData);
    }

    useEffect(() => {
        getLocations();
    }, []);

    useEffect(() => {
        getWeather();
    }, []);

    


    return <>
        <Header location={location} savedLocations ={savedLocations} user = {user} />
        {/* <div>Body</div> */}
        {/* <HomePage /> */}
        <TellYou destination={destination} weatherData ={weatherData} />

        <Footer />
        
    </>;
};

export default App;
