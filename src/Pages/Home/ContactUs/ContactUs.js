import React from 'react';

const ContactUs = () => {
    return (
        <div className='stats w-full max-w-7xl'>
            <div className=' bg-red-50 p-5 stats-vertical' >
                <h1 className='text-3xl font-bold my-3'>Contact Us</h1>
                <input type="text" placeholder="Your Name" className="input my-2 input-bordered input-error w-full max-w-lg drop-shadow-md" /><br />
                <input type="text" placeholder="Your Email" className="input my-2 input-bordered input-error w-full max-w-lg drop-shadow-md" /><br />


                <textarea placeholder="Massage" className="textarea textarea-bordered my-2 textarea-error textarea-lg w-full max-w-lg drop-shadow-md" ></textarea><br />

                <button className="btn w-full max-w-xs drop-shadow-lg m-5 border-red-600 bg-red-600">Send</button>
            </div>
        </div>

    );
};

export default ContactUs;