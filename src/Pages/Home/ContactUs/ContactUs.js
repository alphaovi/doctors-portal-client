import React from 'react';
import background from '../../../img/images/appointment.png';

const ContactUs = () => {
    return (
        <section
            style={{
                background: `url(${background})`
            }}
        >
            <div className="hero min-h-screen ">
                <div className="hero-content">
                    <div className="card ">
                        <div className="card-body">
                            <div>
                                <h4 className="text-xl text-secondary font-bold">Contact Us</h4>
                                <h1 className="text-5xl font-bold m-5 text-white">Stay Connected With Us</h1>
                            </div>
                            <div className="form-control mb-5">
                                <input type="text" placeholder="Email Address" className="input input-bordered" />
                            </div>
                            <div className="form-control mb-5">
                                <input type="text" placeholder="Subject" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <textarea type="text" placeholder="Your meassage" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;