import React from 'react';
import styles from './Main.module.scss';
import PropTypes from "prop-types";

function Main(props) {
  const { img, alt } = props.avatar;

  return (
    <main className={styles.main}>
      <img 
        className={styles.main__img}
        src={img}
        alt={alt}
      ></img>
    </main>
  );
}

Main.propTypes = {
    avatar: PropTypes.object,
};

export default Main;
