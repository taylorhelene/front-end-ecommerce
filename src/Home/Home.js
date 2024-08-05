import React from "react";
// Import our custom CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import  '../app.css'; 
import homepng from '../images/home.png'

const Home=()=>{
    return(
        <div>
            <img src={homepng} className="homepng"></img>
        </div>
    )
}

export default Home;