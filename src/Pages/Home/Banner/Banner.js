import React from 'react';
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <div>
            <div className="hero min-h-full" style={{ backgroundImage: `url("https://steptodown.com/istock-downloader/images/steptodown.com591167.jpg")` }}>
                <div className=" bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-4xl">
                        <h1 className="mb-5 mt-56 text-5xl font-bold text-slate-800">Be a saviour just by donating your blood</h1>
                        <p className="mb-5 text-slate-800">Blood Home is an automated blood service that connects blood searchers with voluntary donors in a moment through SMS. Blood Home is always a free service for all.</p>
                        <Link to="/DonateBlood"><button className="btn drop-shadow-lg m-5 border-red-600 bg-red-600">Donate Blood</button></Link>
                        <Link to="/FiendDonor"><button className="btn mb-44 m-5 drop-shadow-lg bg-white text-black border-white">Fiend Donor</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;