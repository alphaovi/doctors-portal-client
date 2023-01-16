import React from 'react';
import cavity from "../../../../img/images/cavity.png";
import fluoride from "../../../../img/images/fluoride.png";
import whitening from "../../../../img/images/whitening.png";

import Service from '../Service/Service';

const Services = () => {
    const servicesData = [
        {
            id: 1,
            name: "Cavity Filling",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia perferendis tempore voluptas, fugit doloribus possimus quibusdam aut quis expedita",
            img: cavity
        },
        {
            id: 2,
            name: "Fluoride Treatment",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia perferendis tempore voluptas, fugit doloribus possimus quibusdam aut quis expedita",
            img: fluoride
        },
        {
            id: 3,
            name: "Teeth Whitening",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia perferendis tempore voluptas, fugit doloribus possimus quibusdam aut quis expedita",
            img: whitening
        }
    ]
    return (
        <div className="mt-16">
            <div className="text-center">
                <h3 className="text-xl font-bold  text-primary uppercase">Our Services</h3>
                <h2 className="text-3xl">Services we provide</h2>
            </div>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 grid-gap-5 lg:grid-cols-3">
                {
                    servicesData.map(service => <Service 
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;