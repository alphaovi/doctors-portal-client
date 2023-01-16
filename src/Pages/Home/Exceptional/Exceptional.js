import React from 'react';
import treatment from "../../../img/images/treatment.png";

const Exceptional = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
                <div className="p-5">
                    <h2 className="card-title text-5xl text-justify font-bold text-gray-600/100">Exceptional Dental <br /> Care, on Your Terms</h2>
                    <p className="flex-grow-0 mt-5 text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias minima placeat, voluptas nihil nesciunt dolores vero sapiente distinctio pariatur. Magni consectetur amet asperiores eos molestias similique exercitationem earum nam omnis! </p>
                    <div className="card-actions">
                        <button className="btn btn-primary mt-5">Get Started</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exceptional;