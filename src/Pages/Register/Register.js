import React, { useContext, useState } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../../Context/AuthPro/AuthPro';
import reglogin from '../../New folder/image/regandlogin.gif';
import googlelogo from '../../New folder/image/google logo.png';
import Loading from '../../Loading/Loading';

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../../Firebase/firebase.init";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";


const Register = () => {
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // loading
    const { creatUser, updateUser, signInWithGoogle } = useContext(AuthContext);
    console.log(creatUser);
    const location = useLocation();
    const fromLocat = location.state?.fromLocat?.pathname || '/';
    // const navigate = useNavigate()
    // const userDetail = event => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const name = form.name.value;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     const file = form.image.files[0];
    //     console.log(name, email, password, file);

    //     creatUser(email, password, name)
    //         .then(result => {
    //             const user = result.user;
    //             const userInfo = {
    //                 displayName: name,

    //             }
    //             updateUser(userInfo)
    //                 .then(() => {
    //                     navigate('/');
    //                 })
    //                 .catch(err => console.log(err))
    //             console.log('User:', user);
    //             form.reset();
    //             navigate(fromLocat, { replace: true })
    //         })

    //         .catch(error => {
    //             console.error(error)
    //         })
    // }



    const userDetail = async (event) => {
        setLoading(true);
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const file = form.image.files[0];
        console.log(name, email, password, file);

        try {
            //Create user
            const res = await createUserWithEmailAndPassword(auth, email, password);

            //Create a unique image name
            const date = new Date().getTime();
            const storageRef = ref(storage, `${name + date}`);

            await uploadBytesResumable(storageRef, file).then(() => {
                getDownloadURL(storageRef).then(async (downloadURL) => {
                    try {
                        //Update profile
                        await updateProfile(res.user, {
                            displayName: name,
                            photoURL: downloadURL,
                        });
                        //create user on firestore
                        await setDoc(doc(db, "users", res.user.uid), {
                            uid: res.user.uid,
                            displayName: name,
                            email,
                            photoURL: downloadURL,
                        });

                        //create empty user chats on firestore
                        await setDoc(doc(db, "userChats", res.user.uid), {});
                        navigate("/");
                    } catch (err) {
                        console.log(err);
                        setErr(true);
                        setLoading(false);
                    }
                });
            });
        } catch (err) {
            setErr(true);
            setLoading(false);
        }
    }






    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(fromLocat, { replace: true })

            })
            .catch(error => console.log(error))
    }


    if (loading) {
        return <div><Loading></Loading></div>
    }



    return (
        <div className=' stats '>
            <div className="hero lg:py-5 ">
                <div className="hero-content flex-col lg:flex-row-reverse bg-red-100 lg:p-10 rounded-md shadow-2xl lg:mx-10 mb-16">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold mb-5">Signup now!</h1>
                        <p className="py-6 lg:px-6">Though Bangladesh has more than 160 million people, the number of safe blood bank is very few. Without divisional towns, there is hardly any blood bank. But a huge amount of blood is needed for treatment purposes. A good number of accidents take place every day where blood needs essentially.</p>
                        <div className=' stats'>
                            <img src={reglogin} alt="Bloodimage" className=' w-96' />
                        </div>
                    </div>




                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <Form onSubmit={userDetail} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered bg-red-50 rounded-full" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered bg-red-50 rounded-full" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered bg-red-50 rounded-full " required />
                                <label className="label">

                                </label>
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Image</span>
                                </label>
                                <input name='image' type="file" className="file-input file-input-bordered file-input-sm w-full max-w-xs bg-red-50 rounded-full " />
                                <label className="label">

                                </label>
                            </div>




                            <div className="form-control mt-3">
                                <button className="btn bg-red-600 border-red-600 rounded-full">Signup</button>
                            </div>
                            <div>
                                <label className="label mt-2">
                                    <span className="label-text ">I have an account !</span><Link to='/Login' className=' text-red-600'>Login now</Link>
                                </label>
                            </div>
                            {/* <h1>{err}</h1> */}
                            <div className="form-control mt-2">
                                <button onClick={handleGoogleSignIn} className="btn bg-red-50 border-red-600 rounded-full text-red-600 font-bold hover:bg-white hover:border-red-600">Signup With Google<img src={googlelogo} alt="google logo" className=' h-6 ml-6' /></button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;