import React from 'react';
import img1 from '../../../New folder/image/image (1).jpg'
import img2 from '../../../New folder/image/image (2).jpg'
import img3 from '../../../New folder/image/image (3).jpg'
import img4 from '../../../New folder/image/image (4).jpg'
import img5 from '../../../New folder/image/image (5).jpg'
import img6 from '../../../New folder/image/image (6).jpg'

const MoreDetail = () => {
    return (
        <div className=' w-full max-w-7xl p-5 pb-10 mx-auto mb-10 gap-5 columns-3 mt-16'>

            <img src={img1} alt="Image" />
            <img src={img2} alt="Image" />
            <img src={img3} alt="Image" />
            <img src={img4} alt="Image" />
            <p className=' mt-5'>Blood donation is the process of voluntarily giving blood, which is then used for transfusion to individuals who require it due to various medical conditions. Blood transfusion is a life-saving procedure that helps to replace lost blood and provide vital nutrients and oxygen to tissues and organs. Healthy individuals who meet certain criteria can donate blood. By donating blood, individuals can help save lives and contribute to their communities' wellbeing.

            </p>
            <img src={img5} alt="Image" />
            <img src={img6} alt="Image" />

        </div>
    );
};

export default MoreDetail;