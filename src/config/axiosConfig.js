import axios from 'axios';

const url = `${process.env.BASE_URL}`;
const instance = axios.create({
  baseURL: url,
});

export default instance;
