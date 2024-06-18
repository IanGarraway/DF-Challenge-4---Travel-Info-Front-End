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
    const [cookies, setCookie, removeCookie] = useCookies(['username']);
    const [location, setLocation] = useState(["a"]);
    const [destination, setDestination] = useState("");
    const [savedLocations, setSavedLocations] = useState([]);
    const [user, setUser] = useState("");
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
        const cookie = cookies.username;
        if (cookie != undefined) { setUser(cookie); }
        
    }, [user])

    useEffect(() => {
        if (destination) {
            getWeather(destination);
        }
    }, [destination]);   
   

    const getLocations = async () => {
        if (user != "") {
            const locations = await FavouritesService.getFavourites()            
            setSavedLocations(locations);            
        }
    }

    const getWeather = async (city) => {        
        const weatherData = await GetData.weather(city);        

        if (weatherData.status == 200) {
            const weather = weatherData.data;
            setWeatherData(weather.weather);

            const newDestination = `${weather.city.name}, ${weather.city.country}`;
            if (destination != newDestination) destinationSelect(newDestination)
        }
        
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
                        element={<HomePage destinationSelect={destinationSelect} location={location} setLocation={setLocation} />}
                    />
                    <Route
                        path="/login"
                        element={<Login setUser={setUser} getLocations={getLocations} location={location} setLocation={setLocation}/>}
                    />
                    <Route
                        path="/:selectedId"
                        element={<TellYou destination={destination} weatherData={weatherData} setDestination={setDestination} user={user} setSavedLocations={setSavedLocations} savedLocations ={savedLocations} location={location} setLocation={setLocation} />}
                    />
                    <Route
                        path="/favourites"
                        element={<Favourites savedLocations={savedLocations} setSavedLocations={setSavedLocations }location={location} setLocation={setLocation} />}
                    />
                </Routes>
            </div>
            <Footer />
        </div>
        
    </>
}

export default App;
