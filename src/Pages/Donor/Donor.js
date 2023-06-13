import React, { useEffect, useState } from 'react';
import SingleDonor from '../SingleDonor/SingleDonor';


const Donor = () => {
    const [DonorDetail, setDonorDetail] = useState([]);
    useEffect(() => {
        fetch('https://blood-home-server.vercel.app/DonorDetail')
            .then(res => res.json())
            .then(data => setDonorDetail(data))
    }, [])
    console.log(DonorDetail);

    return (
        <div className='stats' >
            <div className="overflow-x-auto lg:mx-11 pb-9">
                <table className="table">
                    {/* head */}

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
                                ></SingleDonor>)
                            }
                        </tbody>

                    </tr>
                    {/* foot */}
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
    );
};

export default Donor;