import React from 'react';
import Header from '../Header'
import Footer from '../Footer'
import { CardContainer } from '../../components/Cards';
import styles from './App.module.scss';
import PropTypes from 'prop-types';

function App(props) {
    const { user } = props.userData;
    const { src } = props.loader;

    return (
        <div className={styles.App}>
            <Header user={user}/>
            <CardContainer src={src}/>
            <Footer/>
        </div>
    );
}

App.propTypes = {
    userData: PropTypes.object,
    loader: PropTypes.object,
};

export default App;
