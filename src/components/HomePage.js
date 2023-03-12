import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { getAllGear } from "../api/gear";
import "../App.css";

const HomePage = () => {
    const navigate = useNavigate();
    const [gear, setGear] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        getAllGear().then((res) => setGear(res));
        // fetch("/api/gear")
        //     .then((res) => res.json())
        //     .then((data) => setGear(data));
    }, []);

    const handleSearch = (query) => {
        navigate(`/gear/search?q=${query}`);
    };

    return (
        <div className="home-page">
            <h1>Used Music Gear</h1>

            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search for gear..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button onClick={() => handleSearch(searchQuery)}>
                    Search
                </button>
            </div>

            <div className="gear-container">
                {gear.map((item) => (
                    <div key={item.id} className="gear-card">
                        <img src={item.imageUrl} alt={item.name} />
                        <div className="gear-card-details">
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                            <Link to={`/gear/${item.id}`}>View Details</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
