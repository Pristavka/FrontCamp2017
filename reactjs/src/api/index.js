import axios from 'axios';

const fetchAllPosts = url => axios.get(url);
const addPosts = (url, body) => axios.post(url, body);

export default {
  fetchAllPosts,
  addPosts
};
