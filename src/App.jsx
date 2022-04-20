import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import About from "./Components/About/About";
import Enquiry from "./Components/Enquiry/Enquiry";
import Contact from "./Components/Contact/Contact";
import Foot from "./Components/Footer/Foot";


const App = () => {
    return (
        <>
           <Navbar/>


            <Home/>
            <Products/>
            <About/>
            <Enquiry/>
            <Contact/>
            <Foot/>
        </>
    );
};

export default App;