import React, { useContext } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { AuthContext } from '../../Context/AuthPro/AuthPro';
import reglogin from '../../New folder/image/regandlogin.gif';
import googlelogo from '../../New folder/image/google logo.png';

const Login = () => {

    const { signIn, signInWithGoogle } = useContext(AuthContext)
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();


    const userLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))

    }


    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });

            })
            .catch(error => console.log(error))
    }



    return (
        <div className=' stats lg:py-5'>
            <div className="hero  ">
                <div className="hero-content flex-col lg:flex-row-reverse bg-red-100 lg:p-10 rounded-md shadow-2xl lg:mx-10 mb-16">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-5">Login now!</h1>
                        <p className="py-6 lg:px-6">Though Bangladesh has more than 160 million people, the number of safe blood bank is very few. Without divisional towns, there is hardly any blood bank. But a huge amount of blood is needed for treatment purposes. A good number of accidents take place every day where blood needs essentially. </p>

                        <div className=' stats'>
                            <img src={reglogin} alt="Bloodimage" className=' w-80' />
                        </div>


                    </div>


                    <div className="card flex-shrink-0 w-full max-w-sm shadow-xl bg-base-100">
                        <Form onSubmit={userLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered bg-red-50 rounded-full" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered bg-red-50 rounded-full " />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover ">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-4">
                                <button className="btn bg-red-600 border-red-600 rounded-full">Login</button>
                            </div>
                            <div>
                                <label className="label mt-4">
                                    <span className="label-text ">I don't have any account !</span>
                                    <Link to='/Register' className=' text-red-600'>Creat new account</Link>
                                </label>

                            </div>
                            <div className="form-control mt-5">
                                <button onClick={handleGoogleSignIn} className="btn bg-red-50 border-red-600 rounded-full text-red-600 font-bold hover:bg-white hover:border-red-600">Login With Google <img src={googlelogo} alt="google logo" className=' h-6 ml-6' /></button>
                            </div>
                        </Form><br />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;