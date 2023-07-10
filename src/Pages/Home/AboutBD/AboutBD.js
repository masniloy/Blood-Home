import React, { useContext, useEffect } from 'react';
import about from '../../../New folder/image/About.gif';
import { Link } from 'react-router-dom';
import Loading from '../../../Loading/Loading';
import { AuthContext } from '../../../Context/AuthPro/AuthPro';
import Aos from 'aos';
import 'aos/dist/aos.css';


const AboutBD = () => {


    useEffect(() => {
        Aos.init({ duration: 800 });
    })

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div><Loading></Loading></div>
    }
    return (
        <div>
            <div className="hero mt-20 stats ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img data-aos="fade-right" src={about} className="max-w-md rounded-lg " />
                    <div data-aos="fade-up">
                        <h1 className="text-3xl font-bold">About Blood Home!</h1><br /><br />
                        <p className=" text-justify">Though Bangladesh has more than 166 million people, there are very few safe blood banks. Without divisional towns, there is hardly any blood bank. But a huge amount of blood is needed for treatment purposes. A good number of accidents take place every day where blood needs essentially. <br /><br />

                            As a result, people fall into real trouble managing blood. But there are many blood donors who are interested in donating blood but don’t know who needs blood. That's why I developed a web application "BLOOD HOME" which is bridge the gap between blood donors and those in need of blood transfusions. BLOOD HOME provides a user-friendly and efficient system for connecting donors with patients, ensuring a timely and reliable supply of blood.</p>
                        <Link to="/About"><button className="btn drop-shadow-lg m-5 border-red-600 bg-red-600">Learn More About Us</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutBD;