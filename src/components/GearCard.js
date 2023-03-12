import React from "react";
import { Link } from "react-router-dom";

const GearCard = ({ gear }) => {
    return (
        <div className="gear-card">
            <Link to={`/gear/${gear.id}`}>
                <div className="gear-card-image">
                    <img src={gear.image} alt={gear.name} />
                </div>
                <div className="gear-card-details">
                    <h2>{gear.name}</h2>
                    <p>{gear.description}</p>
                    <p className="gear-card-price">${gear.price}</p>
                </div>
            </Link>
        </div>
    );
};

export default GearCard;
