import Main from './main/main';
import AddPost from './addPost/addPost';
import { fetchAllPosts } from '../actions';
import config from '../../configs/config';

const routes = [
  {
    path: '/',
    component: Main,
    exact: true,
    fetchInitialData: (store) => store.dispatch(fetchAllPosts(config.getAllPostsURL))
  },
  {
    path: '/addpost',
    component: AddPost,
  }
];

export default routes;
