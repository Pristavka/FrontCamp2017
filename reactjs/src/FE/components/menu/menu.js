import React from 'react';

import styles from '../../assets/menu.scss';
import Link from '../link/link';

const links = ['Show all posts', 'Add post']

const renderSlogan = () => <div className={styles.slogan}>Blogs Portal</div>;

const renderLinks = (props) => (
  <React.Fragment>
    {links.map(txt => (<Link label={txt} key={txt} showComponent={props.showComponent}/>))}
  </React.Fragment>
  );

const Menu = (props) => {
    const slogan = renderSlogan();
    const navigation = renderLinks(props);

    return (
      <React.Fragment>
        {slogan}
        {navigation}
      </React.Fragment>
    )
};

export default Menu;
