// import React, { useEffect, useState } from 'react';
// import SingleDonor from '../SingleDonor/SingleDonor';
// import DonorContract from '../DonorContract/DonorContract';


// const Donor = () => {
//     const [DonorDetail, setDonorDetail] = useState([]);


//     useEffect(() => {
//         fetch('http://localhost:5000/DonorDetail')
//             .then(res => res.json())
//             .then(data => setDonorDetail(data))

//     }, [])


//     const [donorContact, setdonorContact] = useState(null);

//     return (
//         <div className='stats' >
//             <div className="overflow-x-auto lg:mx-11 pb-9">
//                 <table className="table">


//                     <thead>
//                         <tr className=''>

//                             <th className=' flex' >
//                                 <h1 className='w-80'>Name</h1>
//                                 <h1 className='w-80 ml-8 text-center'>District</h1>
//                                 <h1 className='w-80 ml-8 text-center'>Blood group</h1>


//                             </th>
//                         </tr>
//                     </thead>
//                     <tr>
//                         <tbody>

//                             {
//                                 DonorDetail.map(donors => <SingleDonor

//                                     key={donors._id}
//                                     donors={donors}
//                                     setdonorContact={setdonorContact}
//                                 ></SingleDonor>)
//                             }
//                             {
//                                 donorContact &&
//                                 <DonorContract contact={donorContact} setdonorContact={setdonorContact} ></DonorContract>
//                             }
//                         </tbody>

//                     </tr>

//                     <tfoot>
//                         <tr>
//                             <th className=' flex' >
//                                 <h1 className='w-80'>Name</h1>
//                                 <h1 className='w-80 ml-8 text-center'>District</h1>
//                                 <h1 className='w-80 ml-8 text-center'>Blood group</h1>

//                             </th>

//                         </tr>
//                     </tfoot>

//                 </table>
//             </div>
//         </div>
//     );
// };

// export default Donor;