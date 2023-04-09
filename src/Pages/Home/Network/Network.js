import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faLocationDot, faDroplet } from '@fortawesome/free-solid-svg-icons'

const Network = () => {
    return (
        <div>
            <div className="stats shadow w-full max-w-7xl h-32">

                <div className="stat">
                    <div className="stat-figure text-red-600 ">
                        <FontAwesomeIcon className=' h-10  ' icon={faUsers} />
                    </div>
                    <div className="stat-title">Donors</div>
                    <div className="stat-value">3.5K</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-red-600">
                        <FontAwesomeIcon className=' h-10' icon={faDroplet} />
                    </div>
                    <div className="stat-title">Blood Groups</div>
                    <div className="stat-value">8</div>
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