import React from 'react';
import styles from './Main.module.scss';

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

export default Main;