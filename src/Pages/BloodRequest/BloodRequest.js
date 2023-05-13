import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BloodRequest = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div className='stats '>
            <div>

                <div className=' w-full text-4xl font-bold bg-red-100 py-10'>
                    <h1>Blood Request</h1>
                </div><br /><br />

                <div className='lg:stats w-full lg:px-44'>
                    <div>
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
                    <div>
                        <select className="select select-bordered w-96 max-w-xs bg-red-50 ">
                            <option disabled selected>Blood Bags</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>


                </div>
                <div className="lg:stats w-full my-5  lg:px-44">
                    <div className=' flex'>

                        <DatePicker className="select select-bordered w-96 max-w-xs bg-red-50" selected={date} onChange={date => setDate(date)} />
                        {/* <FontAwesomeIcon className=' mt-4' icon={faCalendarDays} /> */}
                    </div>

                    <div>
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


                <div className="lg:stats w-full   lg: px-44">
                    <div>
                        <input type="text" placeholder="Police Station" className="input input-bordered w-96 max-w-xs bg-red-50  " />
                    </div>
                    <div>
                        <input type="text" placeholder="Blood Donation Point" className="input input-bordered w-96 max-w-xs bg-red-50" />
                    </div>
                </div>


                <div className="lg:stats w-full mt-5  lg:px-44">
                    <div>
                        <textarea placeholder="Why you need blood?" className="textarea textarea-bordered   textarea-lg w-full py-6 drop-shadow-md bg-red-50 max-w-3xl" ></textarea>
                    </div>

                </div>
                <span className="label-text text-red-600 "><b>Note:</b> If the group of blood you need is not currently available on our website, then just post the blood request.</span><br />

                <button className="btn my-6 w-full max-w-xs drop-shadow-lg mb-10 border-red-600 bg-red-600">Post</button>
            </div>
        </div>
    );
};

export default BloodRequest;