import React from 'react';
import styles from './Header.module.scss';

function Header(props) {
  const { firstname, lastname } = props.user;

  return (
    <header className={styles.header}>
      <div>{firstname}</div>
      <div>{lastname}</div>
    </header>
  );
}

export default Header;