import React from 'react';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import { CardContainer } from '../CardContainer';
import { Auth } from '../Auth';
import { Profile } from '../Profile';
import { autoLogin } from '../../redux/actions';
import styles from './App.module.scss';

const App = ({ accessType, authCheck }) => {
  useEffect(() => {
    authCheck();
  }, []);

  const Routes = (accessType) => {
    return !accessType ? (
      <Switch>
        <Route path="/login" component={Auth}/>
        <Redirect from="/cards" to="/"/>
        <Redirect from="/profile" to="/"/>
        <Redirect exact from="/" to="/login"/>
      </Switch>
    ) : (
      <Switch>
        <Route path="/cards" component={CardContainer}/>
        <Route path="/profile" component={Profile}/>
        <Redirect from="/login" to="/"/>
        <Redirect exact from="/" to="/cards"/>
      </Switch>
    );
  }

  const Navigation = (accessType) => {
    if (accessType) return (
      <div className={styles.App__Nav}>
        <NavLink to="/cards">Cards</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </div>
    )
  }

  return (
    <div className={styles.App}>
      { Navigation(accessType) }
      { Routes(accessType) }
    </div>
  );
}

const mapStateToProps = (state) => ({
  accessType: state.auth.accessType,
});

const mapDispatchToProps = (dispatch) => ({
  authCheck: () => dispatch(autoLogin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
