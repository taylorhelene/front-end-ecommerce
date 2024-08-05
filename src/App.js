import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./CommonComponents/Header";
import Footer from "./CommonComponents/Footer";
import Home from "./Home/Home";

const App = () =>{
    return (
        <div className="">
            <Header/>
            <Home/>
            <Footer/>
        </div>
    )
}

export default App