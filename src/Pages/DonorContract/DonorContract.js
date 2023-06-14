import React from 'react';

const DonorContract = ({ contact }) => {
    const { name, blood, district, status, email, phone } = contact;
    return (
        <div>


            <>
                <input type="checkbox" id="bookModal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative h-96">
                        <label htmlFor="bookModal" className="btn btn-sm btn-circle absolute right-2 top-2 bg-red-600 border-red-600">✕</label>
                        <div className=' text-center bg-red-100 h-20   p-4 -mt-6 -mx-6  rounded-t-2xl mb-5'>
                            <h1 className=" font-bold text-xl">{name}</h1>

                            <span className="label-text font-bold">Contact Details</span>

                        </div>

                        <div className="form-control w-full max-w-xs mb-2">
                            <label className="label">
                                <span className="label-text font-bold">Donor Phone Number :</span>
                            </label>
                            <input type="text" value={phone} className="input input-bordered w-full max-w-xs" disabled />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold">Donor Email :</span>
                            </label>
                            <input type="text" value={email} className="input input-bordered w-full max-w-xs" disabled />

                        </div><br />

                        <span className="label-text text-red-600"><span className='font-bold'>Note :</span> If you disturb any Donor Without reason, we must block your account !</span>


                    </div>
                </div>
            </>
        </div>
    );
};

export default DonorContract;