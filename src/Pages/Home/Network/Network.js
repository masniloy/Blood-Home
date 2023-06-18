import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faLocationDot, faDroplet, faHospitalUser } from '@fortawesome/free-solid-svg-icons'
import Aos from 'aos';
import 'aos/dist/aos.css';
// shadow-xl lg:-ml-32


const Network = () => {

    useEffect(() => {
        Aos.init({ duration: 800 });
    })

    return (
        <div data-aos="fade-up" className='mt-20 mb-52'>
            <div className="stats shado  w-full max-w-7xl h-32 mt-20 bg-red-100  ">

                <div className="stat">
                    <div className="stat-figure text-red-600 ">
                        <FontAwesomeIcon className=' h-10  ' icon={faHospitalUser} />
                    </div>
                    <div className="stat-title">Donors</div>
                    <div className="stat-value">7.5K</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-red-600">
                        <FontAwesomeIcon className=' h-10' icon={faUsers} />
                    </div>
                    <div className="stat-title">Total User</div>
                    <div className="stat-value">11.8K</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-red-600">
                        <FontAwesomeIcon className=' h-10' icon={faLocationDot} />
                    </div>
                    <div className="stat-title">Locations</div>
                    <div className="stat-value">64D</div>
                </div>

            </div>

        </div>
    );
};

export default Network;