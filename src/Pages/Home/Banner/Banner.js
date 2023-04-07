import React from 'react';


const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://steptodown.com/istock-downloader/images/steptodown.com591167.jpg")` }}>
                <div className=" bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-4xl">
                        <h1 className="mb-5 text-5xl font-bold text-slate-800">Be a saviour just by donating your blood</h1>
                        <p className="mb-5 text-slate-800">Blood Home is an automated blood service that connects blood searchers with voluntary donors in a moment through SMS. Blood Home is always a free service for all.</p>
                        <button className="btn m-5 border-red-600 bg-red-600">Get Started</button>
                        <button className="btn m-5 border-red-600 bg-red-600">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;