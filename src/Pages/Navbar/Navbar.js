import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../../Context/AuthPro/AuthPro';

const Navbar = () => {

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
                                    <Link to="/BloodRequest"><li><a>Blood Request</a></li></Link>
                                </ul>
                            </li>
                            <Link to="/About"><li><a >About Us</a></li></Link>
                        </ul>


                    </div>
                    <Link to="/"><a className="btn btn-ghost normal-case text-xl text-white">Blood Home</a></Link>
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
                                <Link to="/BloodRequest"><li><a><b>Blood Request</b></a></li></Link>
                            </ul>
                        </li>
                        <Link to="/About"><li><a className='text-white'>About Us</a></li></Link>
                    </ul>
                </div>
                <div className="navbar-end">




                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn m-1 text-white bg-red-500 border-red-500 hover:bg-red-600 hover:border-red-600">
                            {
                                user?.email ?
                                    <a className='text-white flex w-15'>
                                        <Link to=""><FontAwesomeIcon className=' h-4  ' icon={faUser} /></Link>
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                    </a>
                                    // <span className='text-white'>{user?.displayName}</span>
                                    :
                                    <Link to="/Login" className='text-white hover:' ><a>Login</a></Link>
                            }

                        </label>
                        <ul tabIndex={0} className="dropdown-content menu  pt-4 shadow bg-base-100 rounded-box w-72">
                            {
                                user?.email ?
                                    <>
                                        <div className=''>
                                            <span className=' font-bold'>{user?.displayName}</span><br />
                                            <span className=' text-sm'>{user?.email}</span><br /><br />
                                            <Link onClick={handleLogOut} ><li><a className=' bg-red-600 h-8 mt-5 text-white text-center rounded-b-xl'> <b>Log Out</b></a></li></Link>
                                        </div>
                                    </>
                                    :
                                    <a className=' w-0'></a>

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