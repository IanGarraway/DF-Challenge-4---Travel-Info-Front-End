import React, {useState, useEffect} from "react";

//pages
import Login from "./pages/Login.jsx";
import HomePage from "./pages/HomePage.jsx"

//components
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";


//utilities
import GetData from "./utils/GetData.js";

const App = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [location, setLocation] = useState(["a"]);
    const [savedLocations, setSavedLocations] = useState([]);
    const [user, setUser] = useState({});
 
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

    useEffect(() => {
        getLocations();
    }, []);

    


    return <>
        <Header location={location} savedLocations ={savedLocations} user = {user} />
        {/* <div>Body</div> */}
        <HomePage />
        <Footer />
        
    </>;
};

export default App;
