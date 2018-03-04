import Main from './main';
import AddPost from './addPost';

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
