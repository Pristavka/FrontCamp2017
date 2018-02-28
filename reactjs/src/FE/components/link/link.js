import React from 'react';

import styles from '../../assets/link.scss';

const showPage = (e, props) => props.showComponent(e.target.innerText.toLowerCase());
const renderLink = (props) => <div className={styles.link} onClick={(e) => showPage(e, props)}>{props.label}</div>;
const Link = (props) => renderLink(props);

export default Link;
