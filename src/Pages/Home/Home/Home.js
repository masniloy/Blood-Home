import React, { useContext } from 'react';
import Banner from '../Banner/Banner';
import AboutBD from '../AboutBD/AboutBD';
import MoreDetail from '../MoreDetail/MoreDetail';
import ImageVews from '../ImageVews/ImageVews';
import Network from '../Network/Network';
import ContactUs from '../ContactUs/ContactUs';
import { AuthContext } from '../../../Context/AuthPro/AuthPro';
import Loading from '../../../Loading/Loading';


const Home = () => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <div><Loading></Loading></div>
    }
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