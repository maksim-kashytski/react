import React from 'react';
import styles from './App.module.scss';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

function App(props) {
  const { user, avatar } = props.userData;
  
  return (
    <div className={styles.profile}>
      <Header user={user}></Header>
      <Main avatar={avatar}></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;