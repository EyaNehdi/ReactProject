import axios from 'axios';
const url ="http://localhost:3000/events";

export const getallEvents = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
};

export const addEvent = async (event) => {
    return await axios.post(url,event);
};

export const editEvent = async (id,event) => {
    return await axios.put(`${url}/${id}`,event);
};

export const deleteEvent = async (id) => {
    return await axios.delete(`${url}/${id}`);
};