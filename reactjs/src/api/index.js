import axios from 'axios';

export const fetchAllPosts = url => axios.get(url);
export const addPosts = url => axios.post(url);
export const removePosts = url => axios.delete(url);
