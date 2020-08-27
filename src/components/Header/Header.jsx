import React from 'react';
import styles from './Header.module.scss';
import PropTypes from 'prop-types';

function Header(props) {
  const { firstname, lastname } = props.user;

  return (
    <header className={styles.header}>
      <div>{firstname}</div>
      <div>{lastname}</div>
    </header>
  );
}

Header.propTypes = {
  user: PropTypes.object,
};

export default Header;
