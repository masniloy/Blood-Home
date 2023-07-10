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

                        <p className="py-6 text-justify">Though Bangladesh has more than 166 million people, there are very few safe blood banks. Without divisional towns, there is hardly any blood bank. But a huge amount of blood is needed for treatment purposes. A good number of accidents take place every day where blood needs essentially. <br /><br />

                            As a result, people fall into real trouble managing blood. But there are many blood donors who are interested in donating blood but don’t know who needs blood. That's why I developed a web application "BLOOD HOME" which is bridge the gap between blood donors and those in need of blood transfusions. BLOOD HOME provides a user-friendly and efficient system for connecting donors with patients, ensuring a timely and reliable supply of blood.

                            <br /><br />


                            The project leverages modern web technologies to create a centralized and secure platform that facilitates the process of blood donation and enhances the overall experience for both donors and recipients. This app features a comprehensive and intuitive interface that allows users to create profiles as either blood donors or recipients. Donors can specify their blood type, location, and availability, while recipients can search for donors based on their requirements. The app utilizes advanced algorithms to match donors and recipients efficiently, taking into account factors such as blood type compatibility, proximity, and urgency. The project aims to streamline the blood donation process in Bangladesh, ultimately saving lives and improving healthcare outcomes. By leveraging technology to connect donors and recipients efficiently, this application strives to overcome geographical barriers and ensure a consistent supply of blood across the country.</p>

                    </div>
                </div>

            </div><br /><br />
            <ContactUs></ContactUs>
        </div>

    );
};

export default About;