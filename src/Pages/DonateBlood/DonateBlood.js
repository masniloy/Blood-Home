import React from 'react';
import NotReady from '../NotReady/NotReady';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthPro/AuthPro';

const DonateBlood = () => {
    const { user } = useContext(AuthContext);

    const handleDonorDetail = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const blood = form.blood.value;
        const phone = form.phone.value;
        const district = form.district.value;
        const status = form.status.value;
        const email = form.email.value;

        const donor = {
            name, blood, phone, district, status, email
        }

        // if (phone.length > 10) {
        //     alert('Use a valid phone number')
        // }

        fetch('https://blood-home-server.vercel.app/DonorDetail', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(donor)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Register Done')
                    form.reset();

                }
            })
            .catch(err => console.log(err));

    }

    return (
        <div className=' -mt-10'>
            <form onSubmit={handleDonorDetail}>
                <div className='  text-4xl font-bold bg-red-100 py-10'>
                    <h1>Register as a Donner</h1>
                </div><br /><br />
                <div className='stats'>


                    <div className='lg:stats w-full lg:px-44'>
                        <div className='m-2'>
                            <input required name='name' type="text" placeholder="Name" className="input input-bordered w-96 max-w-xs bg-red-50  " />
                        </div>
                        <div className='m-2'>
                            <select name='blood' className="select select-bordered w-96 max-w-xs bg-red-50 " required>
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

                    </div>
                </div><br />
                <div className='stats'>
                    <div className="lg:stats w-full my-5  lg:px-44">
                        <div className='m-2'>
                            <input name='phone' required type="phone" placeholder="Phone" className="input input-bordered w-96 max-w-xs bg-red-50" />
                        </div>

                        <div required className='m-2'>
                            <select name='district' className="select select-bordered w-96 max-w-xs bg-red-50">
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
                </div><br />

                <div className='stats'>
                    <div className="lg:stats w-full mb-5  lg:px-44">
                        <div className='m-2'>
                            <input value={user.email} name='email' type="email" disabled className="input input-bordered w-96 max-w-xs bg-red-50" />
                        </div>

                        <div required className='m-2'>
                            <select name='status' className="select select-bordered w-96 max-w-xs bg-red-50">
                                <option disabled selected>Status</option>
                                <option>Eligible</option>
                                <option>Not Eligible</option>

                            </select>
                        </div>


                    </div>
                </div>

                <div>
                    <button className="btn w-full max-w-xs drop-shadow-lg mb-10 border-red-600 bg-red-600">Join</button>
                </div>
            </form>
        </div>
    );
};

export default DonateBlood;