import React from "react";
// Import our custom CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import  '../app.css'; 

const Footer=()=>{
    return(
        <footer className="bg-grey position-absolute bottom-0">
            <div className="flex justify-center row">
                <div className="col-sm-2 p-2">
                    <p className="merriweather-bold-white">Contact</p>
                </div>
                <div className="col-sm-2 p-2">
                    <p className="merriweather-bold-white">Support</p>
                </div>
                <div className="col-sm-2 p-2">
                    <p className="merriweather-bold-white">About</p>
                </div>
                <div className="col-sm-2 p-2">
                    <p className="merriweather-bold-white">Products</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;