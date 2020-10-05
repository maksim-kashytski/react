import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  useHistory
} from "react-router-dom";
import App from '../App';
import Profile from './Profile';
import styles from './Auth.module.scss';

function AuthExample(props) {
  return (
    <Router>
      <div className={styles.auth}>
        <AuthButton />
        <ul>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/protected">Cards</Link>
          </li>
        </ul>
        <Route path="/login" component={Login} />
      </div>
      <PrivateRoute path="/profile" component={Profile} />
      <PrivateRoute path="/protected" component={App} data={props} />
    </Router>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
);

function PrivateRoute({ data, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated ? (
          <Component {...props} {...data}/>
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

class Login extends Component {
  state = {
    redirectToReferrer: false,
    login: '',
    password: ''
  };

  updateState = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({
        redirectToReferrer: true
      });
    });
  };

  render() {
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    let { redirectToReferrer } = this.state;

    console.log(this.state);

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <article className={styles.authForm}>
        <p>You must log in to view the page at {from.pathname}</p>
        <label>Login: <input name="login" onChange={this.updateState}/></label>
        <label>Password: <input name="password"  onChange={this.updateState}/></label>
        <button onClick={this.login}>Log in</button>
      </article>
    );
  }
}

export default AuthExample;