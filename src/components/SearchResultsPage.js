import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, Link } from "react-router-dom";

const apiBaseUrl = "http://localhost:3001/api";

function useQuery() {
    const queryString = window.location.search;
    console.log(queryString);

    const urlParams = new URLSearchParams(queryString);

    const q = urlParams.get("q");
    console.log(q);

    return q;
    // return useLocation().search;
}

function SearchResultsPage() {
    const query = useQuery();
    // const searchTerm = query.get("searchTerm");

    const [gearList, setGearList] = useState([]);

    useEffect(() => {
        const fetchGearList = async () => {
            const response = await axios.get(`${apiBaseUrl}/gear`);
            console.log("query: ", query);
            console.log("response: ", response);
            const data = response.data.filter(
                (gear) =>
                    gear.name.toLowerCase().includes(query.toLowerCase()) ||
                    gear.category.toLowerCase().includes(query.toLowerCase())
            );
            setGearList(data);
        };
        fetchGearList();
    }, [query]);

    return (
        <div>
            <h1>Search results for "{query}"</h1>
            <div>
                {gearList.map((item) => (
                    <div key={item.id}>
                        <Link to={`/gear/${item.id}`}>
                            <img
                                src={item.imageUrl}
                                alt={item.name}
                                style={{ maxWidth: "400px" }}
                            />
                            <h2>{item.name}</h2>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchResultsPage;
