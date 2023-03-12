import axios from "axios";

// Define a base URL for the API requests
const apiBaseUrl = "http://localhost:3001/api";

// Define a function to retrieve all gear listings
export const getAllGear = async () => {
    const response = await axios.get(`${apiBaseUrl}/gear`);
    return response.data;
};

// Define a function to retrieve a single gear listing by ID
export const getGearById = async (id) => {
    const response = await axios.get(`${apiBaseUrl}/gear/${id}`);
    return response.data;
};

// Define a function to create a new gear listing
export const createGear = async (gearData) => {
    const response = await axios.post(`${apiBaseUrl}/gear`, gearData);
    return response.data;
};

// Define a function to update an existing gear listing
export const updateGear = async (id, gearData) => {
    const response = await axios.put(`${apiBaseUrl}/gear/${id}`, gearData);
    return response.data;
};

// Define a function to delete a gear listing by ID
export const deleteGearById = async (id) => {
    const response = await axios.delete(`${apiBaseUrl}/gear/${id}`);
    return response.data;
};
