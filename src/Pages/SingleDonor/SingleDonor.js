import React from 'react';
import DonateBlood from '../DonateBlood/DonateBlood';
import { Link } from 'react-router-dom';


const SingleDonor = ({ donors, setdonorContact }) => {

    const { name, blood, district, status, phone, email } = donors;


    return (
        <div>
            <td>
                <div className="flex items-center space-x-3">
                    <div>
                        <div className="font-bold w-80">{name}</div>
                        <div className="text-sm opacity-50 w-80 text-red-600 font-bold ">{status}</div>
                    </div>
                </div>
            </td>
            <td >
                <div className=' w-80 text-center'>
                    {district}
                </div>

            </td>
            <td className='font-bold '>

                <div className=' text-center w-80'>
                    {blood}
                </div>
            </td>


            <th>




                <label htmlFor="bookModal" className="btn  bg-red-600 btn-xs border-red-600 px-6" onClick={() => setdonorContact(donors)}>Contact</label>
                {/* <Link to="/Chat" htmlFor="bookModal" className="btn  bg-red-600 btn-xs border-red-600 px-6" >Contact</Link> */}
            </th>






        </div>
    );
};

export default SingleDonor;