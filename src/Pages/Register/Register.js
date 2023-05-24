import React, { useContext } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { AuthContext } from '../../Context/AuthPro/AuthPro';



const Register = () => {

    const { creatUser, signInWithGoogle } = useContext(AuthContext);
    console.log(creatUser);
    const location = useLocation();
    const fromLocat = location.state?.fromLocat?.pathname || '/';
    const navigate = useNavigate()
    const userDetail = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        creatUser(email, password)
            .then(result => {
                const user = result.user;
                console.log('User:', user);
                form.reset();
                navigate(fromLocat, { replace: true })
            })

            .catch(error => {
                console.error(error)
            })
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




    return (
        <div className=' stats '>
            <div className="hero lg:my-20 lg:py-10 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold mb-5">Register now!</h1>
                        <p className="py-6 lg:px-6">Though Bangladesh has more than 160 million people, the number of safe blood bank is very few. Without divisional towns, there is hardly any blood bank. But a huge amount of blood is needed for treatment purposes. A good number of accidents take place every day where blood needs essentially.</p>

                        <div className=' px-5  lg:stats gap-px  w-full'>
                            <div className="form-control mt-6 lg:w-64">
                                <button onClick={handleGoogleSignIn} className="btn bg-red-600 border-red-600 rounded-full">Google <FontAwesomeIcon className=' h-6 ml-4' icon={faGoogle} /></button>
                            </div>
                            <div className="form-control mt-6 lg:w-64">
                                <button className="btn bg-sky-600 border-sky-600 rounded-full">Facebook <FontAwesomeIcon className=' h-6 ml-4' icon={faFacebook} /></button>
                            </div>
                            <div className="form-control mt-6 lg:w-64">
                                <button className="btn  bg-sky-700 border-sky-700 rounded-full">Linkedin <FontAwesomeIcon className=' h-6 ml-4' icon={faLinkedin} /></button>
                            </div>
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
                            <div className="form-control mt-6">
                                <button className="btn bg-red-600 border-red-600 rounded-full">Register</button>
                            </div>
                            <div>
                                <label className="label mt-4">
                                    <span className="label-text ">I have an account !</span><Link to='/Login' className=' text-red-600'>Login now</Link>
                                </label>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;