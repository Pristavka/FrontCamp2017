import React from 'react';

import config from '../../config/config';
import styles from '../../assets/message.scss';

const Message = (props) => (
  <div className={styles.successMsg}>
      {config.messages.success}
  </div>
);

export default Message;
