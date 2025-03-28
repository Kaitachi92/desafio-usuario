import axios from 'axios';

const API_URL = 'http://localhost:3000/api/contacts';

export const getContacts = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching contacts: ' + error.message);
    }
};

export const createContact = async (contact) => {
    try {
        const response = await axios.post(API_URL, contact);
        return response.data;
    } catch (error) {
        throw new Error('Error creating contact: ' + error.message);
    }
};

export const updateContact = async (id, contact) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, contact);
        return response.data;
    } catch (error) {
        throw new Error('Error updating contact: ' + error.message);
    }
};

export const deleteContact = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        throw new Error('Error deleting contact: ' + error.message);
    }
};