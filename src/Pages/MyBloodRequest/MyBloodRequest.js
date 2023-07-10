import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthPro/AuthPro';
import BloodList from './BloodList';

const MyBloodRequest = () => {

    const { user } = useContext(AuthContext)
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/BloodRequest/${user?.email}`)
            .then(res => res.json())
            .then(data => setCart(data))
    },)

    return (
        <div>
            <h1 className=' text-xl font-bold'>All your Blood Request</h1>
            <div className='stats h-full mb-32 pt-10  '>

                <div className="overflow-x-auto">
                    <table className="table">



                        {
                            cart.map(request => <BloodList

                                key={request._id}
                                request={request}
                                setCart={setCart}


                            ></BloodList>)
                        }




                    </table>
                </div>

            </div>
            <h1 className=' text-sm text-red-600 '> <b>Note:</b> If for any reason you need to cancel your order then you can cancel the order by contacting our authority. But it should be within two days.</h1>
        </div>
    );
};

export default MyBloodRequest;