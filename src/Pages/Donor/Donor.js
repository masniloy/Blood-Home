import React from 'react';


const Donor = () => {
    return (
        <div >
            <div className="overflow-x-auto lg:mx-11 pb-9">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th >Name</th>
                            <th >District</th>
                            <th >Blood group</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">M A Saimun Niloy</div>
                                        <div className="text-sm opacity-50 text-red-600 font-bold ">Eligible</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Kushtia

                            </td>
                            <td className='font-bold'>A+</td>
                            <th>
                                <button className="btn bg-red-600 btn-xs border-red-600 px-4">Contact</button>
                            </th>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">S M Mustafizur Rahaman</div>
                                        <div className="text-sm opacity-50 text-red-600 font-bold ">Eligible</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Kurigram

                            </td>
                            <td className='font-bold'>A+</td>
                            <th>
                                <button className="btn bg-red-600 btn-xs border-red-600 px-4">Contact</button>
                            </th>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Md Sabbir Ahmed</div>
                                        <div className="text-sm opacity-50 text-red-600 font-bold ">Not Eligible</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Kushtia

                            </td>
                            <td className='font-bold'>B+</td>
                            <th>
                                <button className="btn bg-red-600 btn-xs border-red-600 px-4">Contact</button>
                            </th>
                        </tr>
                        {/* row 4 */}
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Md Firoz Kabir</div>
                                        <div className="text-sm opacity-50 text-red-600 font-bold ">Not Eligible</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Rongpur

                            </td>
                            <td className='font-bold'>O+</td>
                            <th>
                                <button className="btn bg-red-600 btn-xs border-red-600 px-4">Contact</button>
                            </th>
                        </tr>

                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>District</th>
                            <th>Blood Group</th>
                            <th></th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    );
};

export default Donor;