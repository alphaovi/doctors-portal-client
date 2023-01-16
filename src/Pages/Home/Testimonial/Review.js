import React from 'react';

const Review = ({ peopelsReview }) => {
    const { name, img, location, review } = peopelsReview;
    return (
        <section>
            <div className="card shadow-xl">
                <div className="card-body text-left">
                    <p>{review}</p>
                    <div className="card-actions mt-4">
                        <div className="avatar mr-6">
                            <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={img} alt="" />
                            </div>
                        </div>
                        <div>
                            <h5 className="text-large">{name}</h5>
                            <p>{location}</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;