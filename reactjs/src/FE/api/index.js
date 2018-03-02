import axios from 'axios';

export default {
  fetchAllPosts() { return axios.get(); },
  addPosts() { return axios.post(); },
  removePosts() { return axios.delete(); }
};
