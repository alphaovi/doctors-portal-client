import React from 'react';
import doctor from "../../../img/images/doctor.png";
import appointment from "../../../img/images/appointment.png";
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className="mt-32"
            style={{
                background: `url(${appointment})`
            }}
        >
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className="-mt-32 hidden  md:block  lg:w-1/2 rounded-lg shadow-2xl" alt="" />
                    <div>
                        <div className="text-left p-5 text-white">
                            <h4 className='text-lg font-bold text-secondary '>Appointment</h4>
                            <h1 className="text-5xl font-bold ">Make an Appointment Today</h1>
                            <p className="py-6 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisiProvident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi</p>
                            <PrimaryButton>Appointment</PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;