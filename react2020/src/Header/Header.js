import React from 'react';
import styles from './Header.module.scss';

function Header(props) {
  return (
    <header className={styles.header}>
      <div>{props.user.firstname}</div>
      <div>{props.user.lastname}</div>
    </header>
  );
}

export default Header;