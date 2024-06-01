import GetData from "./utils/GetData.js";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import React, {useState, useEffect} from "react";

const App = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
 
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
 
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    return <>
        <Header />
        <div>Body</div>
        <Footer />
        
    </>;
};

export default App;
