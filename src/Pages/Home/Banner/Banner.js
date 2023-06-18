import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

import imageq from "../../../New folder/image/image7.png"


const Banner = () => {

    useEffect(() => {
        Aos.init({ duration: 800 });
    })

    return (
        <div className=' -mt-8'>

            <div className="hero min-h-full w-full" style={{ backgroundImage: `url(${imageq})` }}>

                <div className="hero-content text-justify  text-neutral-content lg:ml-96 lg:-mr-72    " >
                    <div className="max-w-2xl">
                        <div data-aos="fade-left">
                            <h1 className="mb-5 mt-56 text-5xl font-bold text-slate-800">Be a saviour just by donating your blood...</h1>
                            <p className="mb-2 text-slate-800">Blood Home is an automated blood service that connects blood searchers with voluntary donors in a moment through SMS. Blood Home is always a free service for all. Blood Home comes into the scenario to reduce or minimize the communication gap and connects people in a moment using the amazing power of SMS and email.</p>
                        </div>
                        <div data-aos="zoom-in-up" >
                            <Link to="/DonateBlood"><button className="btn w-48 drop-shadow-lg mr-5 border-red-600 bg-red-600">Donate Blood</button></Link>
                            <Link to="/FiendDonor"><button className="btn w-48 mb-44 m-5 drop-shadow-lg bg-white text-black border-white">Fiend Donor</button></Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;