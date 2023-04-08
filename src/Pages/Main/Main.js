import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Home/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar><br />
            <Outlet></Outlet><br />
            <Footer></Footer>
        </div>
    );
};

export default Main;