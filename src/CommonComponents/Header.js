import React from "react";
// Import our custom CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import  '../app.css'; 
import { FiShoppingCart } from "react-icons/fi";

const Header =()=>{
    return(
        <header className="bg-white px-4 py-2  sticky-top">
            <div className="border-bottom">
                <div className="flex justify-center row">
                    <p className="merriweather-light col-sm-4">Buy Now, Pay On CheckOut + We answer any Enquiries</p>
                    <div className="row col-sm-4 ml-auto justify-content-end">
                        <p className="merriweather-light col-sm-2">Stores</p>
                        <p className="merriweather-light col-sm-2" >Sign In</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center row py-1">
                <p className="modern-antiqua-regular col-sm-2">SolidCheckout</p>
                <div className="row col-sm-6 merriweather-bold">
                    <p className="col-sm-1 px-2">vehicles</p>
                    <p className="col-sm-1 px-2">home</p>
                    <p className="col-sm-1 px-2">home</p>
                    <p className="col-sm-1 px-2">home</p>
                </div>
                <div className="row col-sm-4 ml-auto justify-content-end">
                    <FiShoppingCart className="col-sm-2"/>
                </div>
            </div>
        </header>
    )
}

export default Header;