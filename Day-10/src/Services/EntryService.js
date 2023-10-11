import axios from "axios";
import { BASE_URL } from "../Constants/ApiConstant"

const createNewUser = async (request) => {

    const response = await axios.post(`${BASE_URL}/entry/post`, request);
    return response.data;
};

const validateUser = async (request) => {
    const response = await axios.post(`${BASE_URL}/entry/auth_user`, request);
    return response.data;
};

export const EntryService = {
    createNewUser,
    validateUser
}