import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./CommonComponents/Header";
import Footer from "./CommonComponents/Footer";

const App = () =>{
    return (
        <div className="flex container">
            <Header/>
            <Footer/>
        </div>
    )
}

export default App