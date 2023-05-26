import React from 'react';
import NotReady from '../NotReady/NotReady';

const DonateBlood = () => {
    return (
        <div className=' -mt-10'>
            <div className=''>
                <div className='  text-4xl font-bold bg-red-100 py-10'>
                    <h1>Register as a Donner</h1>
                </div><br /><br />
                <div className='stats'>


                    <div className='lg:stats w-full lg:px-44'>
                        <div className='m-2'>
                            <input type="text" placeholder="Name" className="input input-bordered w-96 max-w-xs bg-red-50  " />
                        </div>
                        <div className='m-2'>
                            <select className="select select-bordered w-96 max-w-xs bg-red-50 ">
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
                        </div>

                    </div>
                </div><br />
                <div className='stats'>
                    <div className="lg:stats w-full my-5  lg:px-44">
                        <div className='m-2'>
                            <input type="text" placeholder="Phone" className="input input-bordered w-96 max-w-xs bg-red-50" />
                        </div>

                        <div className='m-2'>
                            <select className="select select-bordered w-96 max-w-xs bg-red-50">
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
                        </div>
                    </div>
                </div>

                <div>
                    <button className="btn w-full max-w-xs drop-shadow-lg mb-10 border-red-600 bg-red-600">Join</button>
                </div>
            </div>
        </div>
    );
};

export default DonateBlood;