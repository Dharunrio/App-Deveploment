import axios from 'axios';
import { BASE_URL, HEADERS } from "../Constants/ApiConstant";

const getAll = async () => {
  const response = await axios.get(`${BASE_URL}/api/user/getAll`, {
    headers : HEADERS
  });
  return response.data;
};

const getAllUser = async () => {
  const response = await axios.get(`${BASE_URL}/user/getAllUser`, {
    headers : HEADERS,
  });
  return response.data;
};

const getByEmail = async (email) => {
  const response = await axios.get(`${BASE_URL}/user/getByEmail/` + email, {
    headers : HEADERS,
  });
  return response.data;
};

const getById = async (id) => {
  const response = await axios.get(`${BASE_URL}/user/getById/` + id, {
    headers : HEADERS,
  });
  return response.data;
};

export const UserService = {
  getAll,
  getAllUser,
  getByEmail,
  getById,
};