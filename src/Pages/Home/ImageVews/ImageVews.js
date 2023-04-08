import React from 'react';
import ap from "../../../New folder/image/A+.gif"
import an from "../../../New folder/image/A-.gif"
import bp from "../../../New folder/image/B+.gif"
import bn from "../../../New folder/image/B-.gif"
import op from "../../../New folder/image/O+.gif"
import on from "../../../New folder/image/O-.gif"
import abp from "../../../New folder/image/AB+.gif"
import abn from "../../../New folder/image/AB-.gif"


const ImageVews = () => {
    return (
        <div className=' mt-20 flex  justify-center items-center'>
            <div className="carousel rounded-box">
                <div className="carousel-item h-36 w-36">
                    <img src={ap} alt="Burger" />
                </div>
                <div className="carousel-item h-36 w-36">
                    <img src={an} alt="Burger" />
                </div>
                <div className="carousel-item h-36 w-36">
                    <img src={bp} alt="Burger" />
                </div>
                <div className="carousel-item h-36 w-36">
                    <img src={bn} alt="Burger" />
                </div>
                <div className="carousel-item h-36 w-36">
                    <img src={op} alt="Burger" />
                </div>
                <div className="carousel-item h-36 w-36">
                    <img src={on} alt="Burger" />
                </div>
                <div className="carousel-item h-36 w-36">
                    <img src={abp} alt="Burger" />
                </div>
                <div className="carousel-item h-36 w-36">
                    <img src={abn} alt="Burger" />
                </div>
            </div>
        </div>
    );
};

export default ImageVews;