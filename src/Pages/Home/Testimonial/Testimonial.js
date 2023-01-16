import React from 'react';
import quote from "../../../img/icons/quote.svg";
import people1 from '../../../img/images/people1.png'
import people2 from '../../../img/images/people2.png'
import people3 from '../../../img/images/people3.png'
import Review from './Review';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: "Winson Herry",
            review: "It is long Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores doloremque ducimus, itaque tempore, expedita et obcaecati sequi, vel dicta veniam dolores? Nihil vel ad voluptates, voluptate corporis suscipit id cupiditate?",
            location: "California",
            img: people1
        },
        {
            _id: 2,
            name: "Winson Herry",
            review: "It is long Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores doloremque ducimus, itaque tempore, expedita et obcaecati sequi, vel dicta veniam dolores? Nihil vel ad voluptates, voluptate corporis suscipit id cupiditate?",
            location: "California",
            img: people2
        },
        {
            _id: 3,
            name: "Winson Herry",
            review: "It is long Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores doloremque ducimus, itaque tempore, expedita et obcaecati sequi, vel dicta veniam dolores? Nihil vel ad voluptates, voluptate corporis suscipit id cupiditate?",
            location: "California",
            img: people3
        },

    ]
    return (
        <section className='mt-10 p-10'>
            <div className='flex justify-between'>
                <div className="text-left">
                    <h3 className="text-xl text-primary font-bold">Testimonial</h3>
                    <h1 className="text-4xl font-bold">What Our Patients Says</h1>
                </div>
                <figure>
                    <img className="w-24 lg:w-48" src={quote} alt="" />
                </figure>
            </div>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    reviews.map(review => <Review
                        key={review._id}
                        peopelsReview={review}
                    >

                    </Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;