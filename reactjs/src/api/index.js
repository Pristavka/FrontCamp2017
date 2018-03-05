import axios from 'axios';

export const fetchAllPosts = url => axios.get(url);
export const addPosts = (url, body) => axios.post(url, body);
