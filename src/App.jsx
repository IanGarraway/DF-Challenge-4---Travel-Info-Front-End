import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"

//pages
import Login from "./pages/Login.jsx";
import HomePage from "./pages/HomePage.jsx"
import Favourites from "./pages/Favourites.jsx";
import TellYou from "./pages/TellYou.jsx";

//components
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";


//utilities
import GetData from "./utils/GetData.js";


//css
import "./pages/css/App.css"

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
        <div className="allApp">
            <Header location={location} savedLocations={savedLocations} user={user} />
            <div className="routesContainer">
                <Routes>
                    <Route
                        path="/"
                        element={<HomePage />}
                    />
                    <Route
                        path="/:selectedId"
                        element={<TellYou destination={destination} weatherData={weatherData} />}
                    />
                    <Route
                        path="/favourites"
                        element={<Favourites savedLocations={savedLocations} />}
                    />
                </Routes>
            </div>
            <Footer />
        </div>
        
    </>
}

export default App;
