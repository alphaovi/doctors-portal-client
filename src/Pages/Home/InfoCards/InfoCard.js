import React from 'react';

const InfoCard = ({ card }) => {
    const {name, descriptions, icon, bgClass} = card;
    return (
        <div className={`card p-5 text-white md:card-side bg-base-100 shadow-xl ${bgClass}`}>
            <figure><img src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{descriptions}</p>
            </div>
        </div>
    );
};

export default InfoCard;