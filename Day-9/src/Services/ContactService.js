import axios from "axios";
import { BASE_URL, HEADERS } from "../Constants/ApiConstant";

const getAllContacts = async () => {
    const response = await axios.get(`${BASE_URL}/contact/getAll`, { headers : HEADERS });
    return response.data;
};

const getContactByUserId = async (userId) => {
    const response = await axios.get(`${BASE_URL}/contact/getContact/${userId}`, { headers : HEADERS });
    return response.data;
};


const getContactsSortedByName = async (dir) => {
    const response = await axios.get(`${BASE_URL}/contact/getSortedContacts/${dir}`, { headers : HEADERS });
    return response.data;
};

const postContact = async (contact) => {
    const response = await axios.post(`${BASE_URL}/contact/post`, contact, { headers : HEADERS });
    return response.data;
};

const updateContact = async (contact, id) => {
    const response = await axios.put(`${BASE_URL}/contact/update/${id}`, contact, { headers : HEADERS });
    return response.data;
};

const deleteContact = async (id) => {
    await axios.delete(`${BASE_URL}/contact/delete/${id}`, { headers : HEADERS });
};

const deleteAllContacts = async () => {
    await axios.delete(`${BASE_URL}/contact/deleteAll`, { headers : HEADERS });
};

export const ContactService = {
    getAllContacts,
    getContactByUserId,
    getContactsSortedByName,
    postContact,
    updateContact,
    deleteContact,
    deleteAllContacts,
};