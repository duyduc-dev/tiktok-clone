import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const request = {
  get: async (path, option = {}) => {
    const res = await instance.get(path, option);
    return res.data;
  },
};

export default instance;
