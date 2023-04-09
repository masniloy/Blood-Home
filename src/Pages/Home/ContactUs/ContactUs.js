import React from 'react';

const ContactUs = () => {
    return (
        <div className='stats w-full max-w-7xl'>
            <div className=' bg-red-50 p-5 stats-vertical' >
                <h1>Contact us</h1>
                <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" /><br /><br />
                <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" /><br />

                <textarea placeholder="Bio" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea><br />
                <button className="btn drop-shadow-lg m-5 border-red-600 bg-red-600">Send</button>
            </div>
        </div>

    );
};

export default ContactUs;