import Main from './main/main';
import AddPost from './addPost/addPost';
import { fetchInitialData } from '../actions';
import config from '../../configs/config';

const routes = [
  {
    path: '/',
    component: Main,
    exact: true,
    fetchInitialData: () => fetchInitialData(config.getAllPostsURL)
  },
  {
    path: '/addpost',
    component: AddPost,
  }
];

export default routes;
