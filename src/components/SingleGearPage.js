import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getGearById } from "../api/gear";

function SingleGearPage() {
    const { id } = useParams();
    const [gear, setGear] = useState(null);

    useEffect(() => {
        async function fetchGear() {
            const gear = await getGearById(id);
            setGear(gear);
        }
        fetchGear();
    }, [id]);

    if (!gear) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{gear.title}</h1>
            <img src={gear.imageUrl} alt={gear.title} style={{maxWidth: '400px'}} />
            <p>Brand: {gear.brand}</p>
            <p>Condition: {gear.condition}</p>
            <p>Price: {gear.price}</p>
            <p>Description: {gear.description}</p>

            <Link to={`/gear/${gear.id}`}>
                <div className="gear-card">
                    <img src={gear.imageUrl} alt={gear.name} />
                    <h3>{gear.name}</h3>
                    <p>{gear.price}</p>
                </div>
            </Link>
        </div>
    );
}

export default SingleGearPage;
