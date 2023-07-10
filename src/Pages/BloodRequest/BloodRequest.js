import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../Context/AuthPro/AuthPro";

const BloodRequest = () => {
    const [date, setDate] = useState(new Date());
    const { user } = useContext(AuthContext);
    console.log(user.displayName)

    const hendleBloodRequest = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const blood = form.blood.value;
        const phone = form.phone.value;
        const email = user?.email;
        const district = form.district.value;
        const status = form.status.value;
        const alternativephone = form.alternativephone.value;
        const bloodbags = form.bloodbags.value;
        const date = form.date.value;
        const policestation = form.policestation.value;
        const donatonpoint = form.donatonpoint.value;
        const reason = form.reason.value;

        const bloodrequest = {
            name, blood, phone, district, status, alternativephone, bloodbags, email, date, policestation, donatonpoint, reason
        }


        fetch('https://blood-home-server.vercel.app/BloodRequest', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bloodrequest)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Blood Request Done')
                    form.reset();

                }
            })
            .catch(err => console.log(err));


    }

    return (
        <div className=' -mt-10'>
            <div className=' w-full text-4xl font-bold bg-red-100 py-10'>
                <h1>Blood Request</h1>
            </div><br /><br />
            <form onSubmit={hendleBloodRequest}>

                <div className='stats'>
                    <div className="lg:stats w-full   lg: px-44">
                        <div className="mx-3.5">
                            <input type="text" name="name" placeholder="name" value={user?.displayName} disabled className="input input-bordered w-96 max-w-xs bg-red-50  " />
                        </div>
                        <div className="mx-3.5">
                            <input name="phone" type="phone" placeholder="Phone" className="input input-bordered w-96 max-w-xs bg-red-50  " required />
                        </div>
                    </div>
                </div><br />

                <div className='stats'>
                    <div className='lg:stats w-full mt-5 lg:px-44'>
                        <div className="mx-3.5">
                            <select name="status" className="select select-bordered w-96 max-w-xs bg-red-50 " required>
                                <option disabled selected>Status</option>
                                <option>Urgent</option>
                                <option>Reguler</option>
                            </select>
                        </div>
                        <div className="">
                            <div className="mx-3.5">
                                <input name="alternativephone" type="phone" placeholder="Alternative Phone" className="input input-bordered w-96 max-w-xs bg-red-50  " required />
                            </div>
                        </div>



                    </div>
                </div><br />


                <div className='stats'>
                    <div className='lg:stats w-full mt-5 lg:px-44'>
                        <div className="mx-3.5">
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
                        <div className="mx-3.5">
                            <select name="bloodbags" className="select select-bordered w-96 max-w-xs bg-red-50 " required>
                                <option disabled selected>Blood Bags</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>


                    </div>
                </div><br />


                <div className='stats'>
                    <div className="lg:stats w-full my-5  lg:px-44">
                        <div className='mx-3.5 flex'>

                            <DatePicker required name="date" className="select select-bordered w-96 max-w-xs bg-red-50" selected={date} onChange={date => setDate(date)} />
                            {/* <FontAwesomeIcon className=' mt-4' icon={faCalendarDays} /> */}
                        </div>

                        <div className="mx-3.5">
                            <select name='district' className="select select-bordered w-96 max-w-xs bg-red-50" required>
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
                    <div className="lg:stats w-full   lg: px-44">
                        <div className="mx-3.5">
                            <input name="policestation" type="text" placeholder="Police Station" className="input input-bordered w-96 max-w-xs bg-red-50  " required />
                        </div>
                        <div className="mx-3.5">
                            <input name="donatonpoint" type="text" placeholder="Blood Donation Point" className="input input-bordered w-96 max-w-xs bg-red-50" required />
                        </div>
                    </div>
                </div>


                <div className="lg:stats w-full mt-5  lg:px-44">
                    <div>
                        <textarea required name="reason" placeholder="Why you need blood?" className="textarea textarea-bordered   textarea-md w-full py-6 drop-shadow-md bg-red-50 max-w-2xl" ></textarea>
                    </div>

                </div>
                <span className="label-text text-red-600 "><b>Note:</b> If the group of blood you need is not currently available on our website, then just post the blood request.</span><br />

                <button className="btn my-6 w-full max-w-xs drop-shadow-lg mb-10 border-red-600 bg-red-600">Post</button>
            </form>
        </div>
    );
};

export default BloodRequest;