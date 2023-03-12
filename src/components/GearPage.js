import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API } from "aws-amplify";

function GearPage() {
    const { id } = useParams();
    const [gear, setGear] = useState(null);

    useEffect(() => {
        async function fetchGear() {
            try {
                const gearData = await API.get("gear", `/gear/${id}`);
                setGear(gearData);
            } catch (error) {
                console.error(error);
            }
        }

        fetchGear();
    }, [id]);

    return (
        <div>
            {gear ? (
                <div>
                    <h1>{gear.name}</h1>
                    <p>Price: ${gear.price}</p>
                    <p>Condition: {gear.condition}</p>
                    <p>Description: {gear.description}</p>
                    <img src={gear.imageUrl} alt={gear.name} />
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default GearPage;
