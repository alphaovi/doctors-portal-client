import React from 'react';
import clock from "../../../img/icons/clock.svg";
import marker from "../../../img/icons/marker.svg";
import phone from "../../../img/icons/phone.svg";
import InfoCard from './InfoCard';
const InfoCards = () => {

    const cardData = [
        {
            id: 1,
            name: "Opening Hours",
            descriptions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolorem magni id commodi",
            icon: clock,
            bgClass : "bg-primary"
        },
        {
            id: 2,
            name: "Visit Our Location",
            descriptions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolorem magni id commodi",
            icon: marker,
            bgClass : "bg-secondary"
        },
        {
            id: 3,
            name: "Contact us",
            descriptions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolorem magni id commodi",
            icon: phone,
            bgClass : "bg-primary"
        }
    ];
    return (
        <div className="grid mt-10 p-5 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                cardData.map(card => <InfoCard 
                    key={card.id}
                    card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;