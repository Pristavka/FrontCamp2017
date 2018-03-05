import Main from './main/main';
import AddPost from './addPost/addPost';

const routes = [
  {
    path: '/',
    component: Main,
    exact: true
  },
  {
    path: '/addpost',
    component: AddPost,
  }
];

export default routes;
