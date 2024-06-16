import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom"
import { useCookies } from "react-cookie";

//pages
import Login from "./pages/Login.jsx";
import HomePage from "./pages/HomePage.jsx"
import Favourites from "./pages/Favourites.jsx";
import TellYou from "./pages/TellYou.jsx";

//components
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";


//utilities
import GetData from "./services/GetData.service.js";


//css
import "./pages/css/App.css"
import FavouritesService from "./services/Favourites.service.js";

const App = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [cookies] = useCookies(['username']);
    const [location, setLocation] = useState(["a"]);
    const [destination, setDestination] = useState("");
    const [savedLocations, setSavedLocations] = useState([]);
    const [user, setUser] = useState(cookies.username);
    const [weatherData, setWeatherData] = useState([]);
    

    const navigate = useNavigate();
 
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
 
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (destination) {
            getWeather(destination);
        }
    }, [destination]);
    
    useEffect(() => {
        console.log('savedLocations updated:', savedLocations);
        // Any other logic that should run when savedLocations updates
    }, [savedLocations]);

    const getLocations = async () => {
        if (user != "") {
            const locations = await FavouritesService.getFavourites()
            setSavedLocations(locations);
        }
    }

    const getWeather = async (city) => {
        console.log(`Getting weather data`);
        const weather = await GetData.weather(city);
        setWeatherData(weather.weather);

        const newDestination = `${weather.city.name}, ${weather.city.country}`;
        if(destination!= newDestination) destinationSelect(newDestination)
        
    }

    const destinationSelect = (city) => {              
        setDestination(city);
        navigate(`/${city}`);
    }

    useEffect(() => {
        getLocations();
    }, [user]);


    return <>
        <div className="allApp">
            <Header location={location} savedLocations={savedLocations} user={user} setDestination={setDestination} setUser={setUser} destinationSelect={destinationSelect} />
            <div className="routesContainer">
                <Routes>
                    <Route
                        path="/"
                        element={<HomePage destinationSelect={destinationSelect}/>}
                    />
                    <Route
                        path="/login"
                        element={<Login setUser={setUser} getLocations={getLocations} />}
                    />
                    <Route
                        path="/:selectedId"
                        element={<TellYou destination={destination} weatherData={weatherData} setDestination={setDestination} user={user} setSavedLocations={setSavedLocations} savedLocations ={savedLocations} />}
                    />
                    <Route
                        path="/favourites"
                        element={<Favourites savedLocations={savedLocations} setSavedLocations={setSavedLocations } />}
                    />
                </Routes>
            </div>
            <Footer />
        </div>
        
    </>
}

export default App;
