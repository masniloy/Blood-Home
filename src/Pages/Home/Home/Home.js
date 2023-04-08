import React from 'react';
import Banner from '../Banner/Banner';
import AboutBD from '../AboutBD/AboutBD';
import MoreDetail from '../MoreDetail/MoreDetail';
import ImageVews from '../ImageVews/ImageVews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutBD></AboutBD>
            <ImageVews></ImageVews>
            <MoreDetail></MoreDetail>
        </div>
    );
};

export default Home;