import React from 'react';
import Banner from '../Banner/Banner';
import AboutBD from '../AboutBD/AboutBD';
import MoreDetail from '../MoreDetail/MoreDetail';
import ImageVews from '../ImageVews/ImageVews';
import Network from '../Network/Network';
import ContactUs from '../ContactUs/ContactUs';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutBD></AboutBD>
            <Network></Network>
            <MoreDetail></MoreDetail>
            <ContactUs></ContactUs>
            <ImageVews></ImageVews>

        </div>
    );
};

export default Home;