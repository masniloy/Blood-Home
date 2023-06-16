import React, { useEffect, useState } from 'react';
import NotReady from '../NotReady/NotReady';
import SingleBloodRequest from '../SingleBloodRequest/SingleBloodRequest';

const AllBloodRequest = () => {
    const [BloodRequest, setBloodRequest] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/BloodRequest')
            .then(res => res.json())
            .then(data => setBloodRequest(data))
    }, [])


    return (
        <div className=' -mt-10'>
            <div className='  text-4xl font-bold bg-red-100 py-10'>
                <h1>All Blood Request</h1>
            </div>

            <div className=' grid grid-cols-2'>
                {
                    BloodRequest.map(request => <SingleBloodRequest

                        key={request._id}
                        request={request}
                        setBloodRequest={setBloodRequest}

                    ></SingleBloodRequest>)
                }
            </div>
        </div>
    );
};

export default AllBloodRequest;