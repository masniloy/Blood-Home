import React from 'react';
import Donor from '../Donor/Donor';

const FiendDonor = () => {
    return (
        <div className=' bg-red-100' >

            <div className='mt-20 mb-8 lg:stats p-11'>
                <div className='mx-1 '>
                    <select className="select select-bordered w-56 max-w-xs bg-red-50">
                        <option disabled selected>Blood Group</option>
                        <option>A+</option>
                        <option>A-</option>
                        <option>B+</option>
                        <option>B-</option>
                        <option>O+</option>
                        <option>O-</option>
                        <option>AB+</option>
                        <option>AB-</option>
                    </select>
                </div><br />

                <div className='mx-1'>
                    <select className="select select-bordered w-56 max-w-xs bg-red-50">
                        <option disabled selected>District</option>
                        <option>Bagerhat</option>
                        <option>Chuadanga</option>
                        <option>Jashore	</option>
                        <option>Jhenaidah</option>
                        <option>Khulna</option>
                        <option>Kushtia	</option>
                        <option>Magura</option>
                        <option>Meherpur</option>
                        <option>Narail</option>
                        <option>Satkhira</option>


                    </select>
                </div><br />

                <div className='mx-1'>
                    <select className="select select-bordered w-56 max-w-xs bg-red-50">
                        <option disabled selected>Date</option>

                    </select>
                </div><br />

                <div className='mx-1'>
                    <select className="select select-bordered w-56 max-w-xs bg-red-50">
                        <option disabled selected>Status</option>
                        <option>All</option>
                        <option>Eligible</option>

                    </select>
                </div><br />
                <button className="btn bg-red-600 border-red-600 rounded-full mx-3 w-32">Search</button>

            </div>

            <div className=''>
                <Donor></Donor>
            </div>

        </div>

    );
};

export default FiendDonor;