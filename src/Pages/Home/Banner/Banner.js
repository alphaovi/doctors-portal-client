import React from 'react';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
import chair from "../../../img/images/chair.png"
const Banner = () => {
    return (
        <div className="hero bg-base-200 m-20px mt-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className=" rounded-lg lg:w-1/2 shadow-2xl" alt="" />
                <div className="text-left">
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;