import React, { useState } from "react";
import Donor from '../Donor/Donor';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
const FiendDonor = () => {

    const [date, setDate] = useState(new Date());
    return (
        <div  >

            <div className=' bg-red-100'>
                <div className='my-16  lg:stats p-11'>
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

                    <div className='mx-1 flex'>

                        <DatePicker className="select select-bordered w-56 max-w-xs bg-red-50" selected={date} onChange={date => setDate(date)} />
                        {/* <FontAwesomeIcon className=' mt-4' icon={faCalendarDays} /> */}
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
            </div>

            <div className='mt-10'>
                <Donor></Donor>
            </div>

        </div>

    );
};

export default FiendDonor;