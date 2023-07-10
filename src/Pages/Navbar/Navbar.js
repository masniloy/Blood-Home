import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../../Context/AuthPro/AuthPro';
import avatar from "../../New folder/image/avatar.gif"
import logo3 from "../../New folder/logo/logo3.jpg"
import Aos from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {

    useEffect(() => {
        Aos.init({ duration: 800 });
    })

    const { user, logOut } = useContext(AuthContext);
    console.log(user?.displayName);
    // var name = user?.displayName.split(" ").splice(-1)[0];
    // console.log(name);



    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }


    return (
        <div className='mb-20'>
            <div className="navbar bg-red-600 fixed top-0 z-50 ">
                <div className="navbar-start ">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                            <Link to="/Home"><li ><a >Home</a></li></Link>

                            <li tabIndex={0}>
                                <a className="justify-between">
                                    Blood
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2 bg-white">
                                    <Link to="/FiendDonor"><li><a>Fiend Donor</a></li></Link>

                                    <Link to="/DonateBlood"><li><a>Donate Blood</a></li></Link>

                                </ul>
                            </li>
                            <li tabIndex={0}>
                                <a className='justify-between'>
                                    Request
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2 bg-white">
                                    <Link to="/AllBloodRequest"><li><a><b>All Blood Request</b></a></li></Link>
                                    <Link to="/BloodRequest" className=' hover:'><li><a><b>Post Blood Request</b></a></li></Link>

                                </ul>
                            </li>
                            <Link to="/About"><li><a >About Us</a></li></Link>
                        </ul>


                    </div>
                    <Link to="/"><a className="  normal-case text-xl text-white"><img className='h-14' src={logo3} alt="" />  </a></Link>
                </div>


                <div className="navbar-center  hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <Link to="/Home"><li><a className='text-white'>Home</a></li></Link>
                        <li tabIndex={0}>
                            <a className='text-white'>
                                Blood
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2 bg-white">
                                <Link to="/FiendDonor" ><li><a><b>Fiend Donor</b></a></li></Link>
                                <Link to="/DonateBlood"><li><a><b>Donate Blood</b></a></li></Link>

                            </ul>
                        </li>
                        <li tabIndex={0}>
                            <a className='text-white'>
                                Request
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2 bg-white">
                                <Link to="/AllBloodRequest"><li><a><b>All Blood Request</b></a></li></Link>
                                <Link to="/BloodRequest" className=' hover:'><li><a><b>Post Blood Request</b></a></li></Link>

                            </ul>
                        </li>
                        <Link to="/About"><li><a className='text-white'>About Us</a></li></Link>
                    </ul>
                </div>
                <div className="navbar-end">




                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn m-1 text-white bg-red-600 border-red-600 hover:bg-red-600 hover:border-red-600">
                            {
                                user?.email ?
                                    <a className='text-white  flex'>
                                        <div className="avatar online ">
                                            <div className="w-10 rounded-full">
                                                <img src={avatar} />
                                            </div>
                                        </div><br />
                                    </a>
                                    // <span className='text-white'>{user?.displayName}</span>
                                    :

                                    <a className='text-white flex'>
                                        <div className="avatar ">
                                            <div className="w-10 rounded-full">
                                                <img src={avatar} />
                                            </div>
                                        </div><br />
                                    </a>
                            }

                        </label>
                        <ul tabIndex={0} className="dropdown-content menu  pt-4 shadow bg-base-100 rounded-lg w-72">
                            {
                                user?.email ?
                                    <>
                                        <div className=''>
                                            <div className="avatar  rounded-full">
                                                <div className="w-24 rounded-full">
                                                    <img src={avatar} />
                                                </div>
                                            </div><br />


                                            <span className=' font-bold'>{user?.displayName}</span><br />
                                            <span className=' text-sm'>{user?.email}</span><br /><br />
                                            <Link to='/MyBloodRequest' ><li><a className=' bg-red-100 text-center hover:bg-white h-10 '> <b>My Blood Request</b></a></li></Link>
                                            <Link onClick={handleLogOut} ><li><a className=' bg-red-600 h-10  text-white text-center rounded-b-lg'> <b>Log Out</b></a></li></Link>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div className=''>
                                            <Link to="/Login"  ><li><a className='  -mt-4  text-center h-10 rounded-b-lg'> <b>Login <FontAwesomeIcon className=' h-3  ml-20  ' icon={faArrowRight} /></b></a></li></Link>
                                            <Link to="/Register"  ><li><a className=' bg-red-600 h-10   text-white text-center rounded-b-lg'> <b>Register <FontAwesomeIcon className=' h-3  ml-16  ' icon={faArrowRight} /></b></a></li></Link>
                                        </div>
                                    </>

                            }
                        </ul>
                    </div>

                    {/* <Link to="/Login"><a className="btn border-white bg-red-600">Login</a></Link> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;