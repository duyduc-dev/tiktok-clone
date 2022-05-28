import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

const httpRequest = {
  get: async (path, option = {}) => {
    const res = await instance.get(path, option);
    return res.data;
  },
};

export default httpRequest;
