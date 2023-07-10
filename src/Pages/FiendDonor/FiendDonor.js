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

    const [findDonor, setFindDonor] = useState({
        blood: '',
        district: '',
        status: ''
    });

    const handleSelect = (e) => {
        setFindDonor((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }


    const [DonorDetail, setDonorDetail] = useState([]);

    useEffect(() => {
        console.log("findDonor ", findDonor);
        const { blood, district, status } = findDonor;

        let url = "https://blood-home-server.vercel.app/DonorDetail/query/?";
        let params = [];

        if (blood && blood.trim() !== '') {
            params.push(`blood=${blood.replace('+', '%2B')}`);
        }

        if (district && district.trim() !== '') {
            params.push(`district=${district}`);
        }

        if (status && status.trim() !== '') {
            params.push(`status=${status}`);
        }

        if (params.length > 0) {
            url += params.join('&');
        } else {
            return; // Return if there are no parameters
        }

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setDonorDetail(data);
                console.log("fetch data is ", data);
            })
            .catch(err => console.log(err))
    }, [findDonor])

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
                        <select name="blood" onChange={handleSelect} className="select select-bordered w-56 max-w-xs bg-red-50">
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
                        <select name='district' onChange={handleSelect} className="select select-bordered w-56 max-w-xs bg-red-50">
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
                        <select name="status" className="select select-bordered w-56 max-w-xs bg-red-50" onChange={handleSelect}>
                            <option disabled selected>Status</option>
                            <option>Eligible</option>
                            <option>Not Eligible</option>
                        </select>
                    </div><br />
                    {/* <Link to='/Do'>
                        <button className="btn bg-red-600 border-red-600 rounded-full mx-3 w-32">Search</button>
                    </Link> */}

                </form>
            </div>
            {/* <h1>{findDonor.district}</h1>
            <h1>{findDonor.blood}</h1>
            <h1>{findDonor.status}</h1> */}

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