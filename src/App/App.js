import React from 'react';
import styles from './App.module.scss';
import { Header, Main, Footer } from './index.js';

function App(props) {
  return (
    <div className={styles.profile}>
      <Header user={props.userData.user}></Header>
      <Main avatar={props.userData.avatar}></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;