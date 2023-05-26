import React from 'react';
import inbuild from '../../New folder/image/In Build.gif'
import about from '../../New folder/image/image 4.jpg';
import about1 from '../../New folder/image/about4.gif';
import { Link } from 'react-router-dom';
import ContactUs from '../Home/ContactUs/ContactUs';
const About = () => {
    return (
        <div className=''>
            <h1 className="text-4xl font-bold bg-red-100 py-10 rounded-md -mt-10">About Blood Home!</h1>

            <div className="hero  ">

                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div>
                        <img src={about1} className="max-w-sm rounded-lg " />


                    </div>
                    <div>

                        <p className="py-6 text-left">Though Bangladesh has more than 160 million people, the number of safe blood bank is very few. Without divisional towns, there is hardly any blood bank. But a huge amount of blood is needed for treatment purposes. A good number of accidents take place every day where blood needs essentially. As a result, people fall in real trouble to manage blood. But there are many blood donors who are interested in donating blood but don’t know who needs blood. The communication gap is resulting in the loss of many lives. <br /><br />

                            Blood Home comes into the scenario to reduce or minimize the communication gap and connects people in a moment using the amazing power of SMS and email. As Blood Home services can also be availed by SMS, people from any class of the society can easily avail of Blood Home services.

                            <br /><br />


                            Though Bangladesh has more than 160 million people, the number of safe blood bank is very few. Without divisional towns, there is hardly any blood bank. But a huge amount of blood is needed for treatment purposes. A good number of accidents take place every day where blood needs essentially. As a result, people fall in real trouble to manage blood. But there are many blood donors who are interested in donating blood but don’t know who needs blood. The communication gap is resulting in the loss of many lives.
                            Blood Home comes into the scenario to reduce or minimize the communication gap and connects people in a moment using the amazing power of SMS and email. As Blood Home services can also be availed by SMS, people from any class of the society can easily avail of Blood Home services. Blood Home comes into the scenario to reduce or minimize the communication gap and connects people in a moment using the amazing power of SMS and email. As Blood Home services can also be availed by SMS, people from any class of the society can easily avail of Blood Home services.</p>

                    </div>
                </div>

            </div><br /><br />
            <ContactUs></ContactUs>
        </div>

    );
};

export default About;