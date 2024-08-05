import React from "react";
// Import our custom CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import  '../app.css'; 

const Footer=()=>{
    return(
        <footer className="bg-secondary  bottom-0 container-fluid ">
            <div className="justify-center  row  py-4">
                <div className="col-sm-2 ">
                    <p className="merriweather-bold-white">Contact</p>
                    <p className="merriweather-bold-white-small">Contact Us</p>
                    <p className="merriweather-bold-white-small">📞 +2547000000</p>
                </div>
                <div className="col-sm-2 ">
                    <p className="merriweather-bold-white">Support</p>
                </div>
                <div className="col-sm-2 ">
                    <p className="merriweather-bold-white">About</p>
                </div>
                <div className="col-sm-2 ">
                    <p className="merriweather-bold-white">Products</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;