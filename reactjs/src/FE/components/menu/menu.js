import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../assets/menu.scss';

const links = ['Show all posts', 'Add post']

const renderSlogan = () => <div className={styles.slogan}>Blogs Portal</div>;

const Menu = (props) => {
    const slogan = renderSlogan();

    return (
      <React.Fragment>
        {slogan}
        <Link to='/'>Show all posts</Link>
        <Link to='/addpost'>Add post</Link>
      </React.Fragment>
    )
};

export default Menu;
