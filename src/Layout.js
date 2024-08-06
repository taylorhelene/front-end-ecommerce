import { Outlet, Link } from "react-router-dom";
import React from "react";
import Header from "./CommonComponents/Header";
import Footer from "./CommonComponents/Footer";

const Layout = () => {
  return (
    <>
      <Header/>
      <Outlet />
      <Footer/>
    </>
  )
};

export default Layout;