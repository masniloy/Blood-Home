import React from 'react';
import Banner from '../Banner/Banner';
import AboutBD from '../AboutBD/AboutBD';
import MoreDetail from '../MoreDetail/MoreDetail';
import ImageVews from '../ImageVews/ImageVews';
import Network from '../Network/Network';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutBD></AboutBD>
            <MoreDetail></MoreDetail>
            <Network></Network>
            <ImageVews></ImageVews>

        </div>
    );
};

export default Home;