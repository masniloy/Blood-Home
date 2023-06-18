import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ContactUs = () => {
    useEffect(() => {
        Aos.init({ duration: 800 });
    })
    return (
        <div data-aos="fade-up" className='stats w-full max-w-7xl'>
            <div className=' bg-red-100 p-5 stats-vertical' >
                <h1 className='text-3xl font-bold my-3'>Contact us</h1>
                <input type="text" placeholder="Your Name" className="input input-sm mx-4 my-2 input-bordered  w-full max-w-xs drop-shadow-md" />


                <input type="text" placeholder="Your Email" className="input input-sm my-2 input-bordered  w-full max-w-xs mx-4 drop-shadow-md" /><br />


                <input type="text" placeholder="Subject" className="input input-sm my-2 input-bordered  w-full max-w-2xl drop-shadow-md" /><br />


                <textarea placeholder="Massage" className="textarea textarea-bordered my-2  textarea-lg w-full py-8 max-w-2xl drop-shadow-md" ></textarea><br />

                <button className="btn w-full max-w-xs drop-shadow-lg m-5 border-red-600 bg-red-600">Send</button>
            </div>
        </div>

    );
};

export default ContactUs;