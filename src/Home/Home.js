import React from "react";
// Import our custom CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import  '../app.css'; 
import background from "../images/home.png";


const Home=()=>{
    return(
        <div >
            <div style={{ backgroundImage: `url(${background})`}} className="homepng border rounded">
                <div className="row m-2">
                    <div className="col-sm-3">
                        <p className=" merriweather-bold-large ">Purchase Items and Pay on Pick-Up</p>
                        <p className=" merriweather-bold-black ">Contact us to get specified orders on items. Get requested installations on electronics and household items. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;