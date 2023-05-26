import React from 'react';
import about from '../../../New folder/image/About.gif';
import { Link } from 'react-router-dom';

const AboutBD = () => {
    return (
        <div>
            <div className="hero mt-20 stats ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={about} className="max-w-md rounded-lg " />
                    <div>
                        <h1 className="text-3xl font-bold">About Blood Home!</h1>
                        <p className="py-6">Though Bangladesh has more than 160 million people, the number of safe blood bank is very few. Without divisional towns, there is hardly any blood bank. But a huge amount of blood is needed for treatment purposes. A good number of accidents take place every day where blood needs essentially. As a result, people fall in real trouble to manage blood. But there are many blood donors who are interested in donating blood but don’t know who needs blood. The communication gap is resulting in the loss of many lives. <br /><br />

                            Blood Home comes into the scenario to reduce or minimize the communication gap and connects people in a moment using the amazing power of SMS and email. As Blood Home services can also be availed by SMS, people from any class of the society can easily avail of Blood Home services.</p>
                        <Link to="/About"><button className="btn drop-shadow-lg m-5 border-red-600 bg-red-600">Learn More About Us</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutBD;