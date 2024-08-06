import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Decor from "./Decor/Decor";
import Layout from "./Layout";

const App = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="decor" element={<Decor />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App