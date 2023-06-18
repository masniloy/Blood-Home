import React from 'react';

const SingleBloodRequest = ({ request }) => {
    const { name, blood, phone, district, status, alternativephone, bloodbags, date, policestation, donatonpoint, reason } = request;
    console.log(request.blood)
    return (
        <div className=' w-full '>
            <div className=' mx-5 stats '>
                <div className='  my-10 shadow-xl'>
                    <div className="card  stats">
                        <div className="card-body relative h-full">
                            <div className=' text-center bg-red-600 h-20   p-4 -mt-6 -mx-6  rounded-t-2xl mb-5'>
                                <h1 className=" font-bold text-xl text-white">{name}</h1>

                                <span className="label-text  text-white">Need Blood <span className='text-black font-bold'>({status})</span></span>

                            </div>

                            <div className='flex gap-4 -mt-3 '>

                                <div className="form-control w-full max-w-xs ">
                                    <label className="label">
                                        <span className="label-text font-bold">Blood Group :</span>
                                    </label>
                                    <input type="text" value={blood} className="input input-bordered w-full max-w-xs" disabled />

                                </div>

                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text font-bold">Blood Bags :</span>
                                    </label>
                                    <input type="text" value={bloodbags} className="input input-bordered w-full max-w-xs" disabled />

                                </div>


                            </div><br />

                            <div className='flex gap-4 -mt-7'>

                                <div className="form-control w-full max-w-xs ">
                                    <label className="label">
                                        <span className="label-text font-bold">Phone Number :</span>
                                    </label>

                                    <h1 className='bg-gray-100 p-3 rounded-lg h-12 text-left'>{phone} <b>or</b> {alternativephone}</h1>

                                </div>

                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text font-bold">Date :</span>
                                    </label>
                                    <input type="text" value={date} className="input input-bordered w-full max-w-xs" disabled />

                                </div>
                            </div><br />


                            <div className='w-full -mt-7'>
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text font-bold">Location :</span>
                                    </label>
                                    <h1 className='bg-gray-100 p-3 rounded-lg h-12 text-left'>{district}, {policestation}, {donatonpoint}  </h1>

                                </div>
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text font-bold">Massage :</span>
                                    </label>
                                    <h1 className='bg-gray-100 p-2 rounded-lg h-24 text-left'>{reason}</h1>

                                </div>

                            </div><br />

                            <span className="label-text text-red-600 -mt-6"><span className='font-bold'>Note :</span> If you disturb any User Without reason, we must block your account. Also, we must take legal action !</span>


                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SingleBloodRequest;