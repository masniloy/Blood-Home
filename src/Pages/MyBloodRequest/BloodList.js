import React from 'react';

const BloodList = ({ request }) => {

    const { name, blood, phone, district, status, alternativephone, bloodbags, date, policestation, donatonpoint, reason, email, _id } = request;

    const hendleDelete = request => {
        const agree = window.confirm(`Are you sure you want to delete: ${name}`)

        if (agree) {
            fetch(`https://blood-home-server.vercel.app/BloodRequest/${_id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }

    }
    return (
        <div className=''>
            <div className=' w-full align-middle  rounded-lg  my-5 gap-10 '>
                <tbody className=''>
                    {/* row 1 */}
                    <tr >
                        <th>

                        </th>
                        <td>
                            <div className="flex items-center space-x-3 mr-10 lg:w-52">

                                <div>
                                    <div className="font-bold">{date}</div>

                                </div>
                            </div>
                        </td>

                        <td className='lg:w-52'>Quantity: <b>{bloodbags}</b>  bg</td>

                        <td className='lg:w-52'>Blood:<b> {blood} </b></td>

                        <th className=''>
                            <button onClick={() => hendleDelete(_id)} className="btn w-8 h-8 bg-red-600 border-red-600 rounded-full btn-xs lg:mx-10">X</button>
                        </th>
                    </tr>

                </tbody>
            </div>
        </div>
    );
};

export default BloodList;