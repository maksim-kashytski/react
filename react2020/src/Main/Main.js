import React from 'react';
import styles from './Main.module.scss';

function Main(props) {
  return (
    <main className={styles.main}>
      <img className={styles.main__img} src={props.avatar.img} alt={props.avatar.alt}></img>
    </main>
  );
}

export default Main;