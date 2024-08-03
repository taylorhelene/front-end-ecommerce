import React from "react";
// Import our custom CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import  '../app.css'; 

const Header =()=>{
    return(
        <div className="bg-white px-4 py-2 border-bottom">
            <div className="flex justify-center row">
                <p className="merriweather-light col-sm-4">Buy Now, Pay On CheckOut + We answer any Enquiries</p>
                <div className="row col-sm-4 ml-auto">
                    <p className="merriweather-light col-sm-4">Stores</p>
                    <p className="merriweather-light col-sm-4" >Sign In</p>
                </div>
            </div>
        </div>
    )
}

export default Header;