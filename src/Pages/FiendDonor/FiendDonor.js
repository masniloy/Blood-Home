import React, { useContext, useEffect, useState } from "react";
import Donor from '../Donor/Donor';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import Loading from "../../Loading/Loading";
import { AuthContext } from "../../Context/AuthPro/AuthPro";
import { Link } from "react-router-dom";
import Do from "./Do";
import SingleDonor from "../SingleDonor/SingleDonor";
import DonorContract from "../DonorContract/DonorContract";

const FiendDonor = () => {


    const getInitialStateBlood = () => {
        const blood = " ";
        return blood;
    };
    const [blood, setblood] = useState(getInitialStateBlood);
    const handleChangeBlood = (e) => {
        setblood(e.target.value);
    };




    const getInitialStateDistrict = () => {
        const district = " ";
        return district;
    };
    const [district, setdistrict] = useState(getInitialStateDistrict);
    const handleChangeDistrict = (ex) => {
        setdistrict(ex.target.value);
    };




    const getInitialStateStatus = () => {
        const status = " ";
        return status;
    };
    const [status, setStatus] = useState(getInitialStateStatus);
    const handleChangeStatus = (ex) => {
        setStatus(ex.target.value);
    };


    // `http://localhost:5000/DonorDetail/${district}`


    const [DonorDetail, setDonorDetail] = useState([]);

    console.log(district);

    useEffect(() => {
        const url = `http://localhost:5000/DonorDetail/query/?district=${district}&blood=${blood}&status=${status}`

        fetch(url)
            .then(res => res.json())
            .then(data => setDonorDetail(data).reset())
    }, [district, blood, status])

    const [donorContact, setdonorContact] = useState(null);

    // const [date, setDate] = useState(new Date());

    const { loading } = useContext(AuthContext);

    if (loading) {
        return <div><Loading></Loading></div>
    }


    return (
        <div  >

            <div className=' bg-red-100 -mt-10'>
                <form className='my-16  lg:stats p-11'>
                    <div className='mx-1 '>
                        <select name="blood" onChange={handleChangeBlood} className="select select-bordered w-56 max-w-xs bg-red-50">
                            <option disabled selected>Blood Group</option>
                            <option value='A+'>A+</option>
                            <option value='A-'>A-</option>
                            <option value='B+'>B+</option>
                            <option value='B-'>B-</option>
                            <option value='O+'>O+</option>
                            <option value='O-'>O-</option>
                            <option value='AB+'>AB+</option>
                            <option value='AB-'>AB-</option>
                        </select>
                    </div><br />

                    <div className='mx-1'>
                        <select district={district} name='district' onChange={handleChangeDistrict} className="select select-bordered w-56 max-w-xs bg-red-50">
                            <option disabled selected>District</option>
                            <option >Bagerhat</option>
                            <option >Chuadanga</option>
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

                    {/* <div className='mx-1 flex'>

                        <DatePicker className="select select-bordered w-56 max-w-xs bg-red-50" selected={date} onChange={date => setDate(date)} />
                        
                    </div><br /> */}

                    <div className='mx-1'>
                        <select className="select select-bordered w-56 max-w-xs bg-red-50" onChange={handleChangeStatus}>
                            <option disabled selected>Status</option>
                            <option>Eligible</option>

                        </select>
                    </div><br />
                    {/* <Link to='/Do'>
                        <button className="btn bg-red-600 border-red-600 rounded-full mx-3 w-32">Search</button>
                    </Link> */}

                </form>
            </div>
            <h1>{district}</h1>
            <h1>{blood}</h1>
            <h1>{status}</h1>

            <div className=' mt-10'>



                <div className='stats' >
                    <div className="overflow-x-auto lg:mx-11 pb-9">
                        <table className="table">


                            <thead>
                                <tr className=''>

                                    <th className=' flex' >
                                        <h1 className='w-80'>Name</h1>
                                        <h1 className='w-80 ml-8 text-center'>District</h1>
                                        <h1 className='w-80 ml-8 text-center'>Blood group</h1>


                                    </th>
                                </tr>
                            </thead>
                            <tr>
                                <tbody>

                                    {
                                        DonorDetail.map(donors => <SingleDonor

                                            key={donors._id}
                                            donors={donors}
                                            setdonorContact={setdonorContact}
                                        ></SingleDonor>)
                                    }
                                    {
                                        donorContact &&
                                        <DonorContract contact={donorContact} setdonorContact={setdonorContact} ></DonorContract>
                                    }
                                </tbody>

                            </tr>

                            <tfoot>
                                <tr>
                                    <th className=' flex' >
                                        <h1 className='w-80'>Name</h1>
                                        <h1 className='w-80 ml-8 text-center'>District</h1>
                                        <h1 className='w-80 ml-8 text-center'>Blood group</h1>

                                    </th>

                                </tr>
                            </tfoot>

                        </table>
                    </div>
                </div>


                {/* {
                    DonorDetails.map(request => <Do

                        key={request._id}
                        request={request}
                        setCart={setDonorDetails}

                    ></Do>)
                } */}
            </div>

        </div>

    );
};

export default FiendDonor;