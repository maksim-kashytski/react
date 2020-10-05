import React from 'react';
import styles from './Auth.module.scss';
import { connect } from 'react-redux';
import { Error } from '../Error';
import { login, logout } from '../../redux/actions';

class Auth extends React.Component {
  state = {
      login: {
        value: '',
        isValid: true,
      },
      password: {
        value: '',
        isValid: true,
      },
      accessType: {
        value: '',
        isValid: true,
      },
      isValid: true
  }

  updateState = (e) => {
    let isValid = false;

    switch (e.target.name) {
      case 'login':
        isValid = new RegExp(/^[a-zA-Z0-9\.@]+$/).test(e.target.value);
        break;
      case 'password':
        isValid = new RegExp(/^[a-zA-Z0-9]+$/).test(e.target.value);
        break;
      case 'accessType':
        isValid = new RegExp(/^(User|Admin)$/).test(e.target.value);
        break;
      default: 
        break;
    }

    this.setState({ [e.target.name]: { value: e.target.value, isValid } })
  }

  formIsValid = () => {
    const { login, password, accessType } = this.state;
    const isValid = !(!login.isValid || !password.isValid || !accessType.isValid);
    
    this.setState({ isValid });

    if (isValid) {
      this.props.userLogin(login.value, accessType.value);
      this.setState({
        login: {
          value: '',
          isValid: true,
        },
        password: {
          value: '',
          isValid: true,
        },
        accessType: {
          value: '',
          isValid: true,
        },
        isValid: true
      });
    }
  }

  error = (name) => {
    if (!this.state.isValid && !this.state[name].isValid) return <Error />
  }

  render() {
    return (
      <article className={styles.authForm}>
        <label>Login: <input
          name="login"
          value={this.state.login.value}
          placeholder="example@qwerty.com"
          onChange={this.updateState}/>
        </label>
        { this.error('login') }
        <label>Password: <input 
          name="password"
          value={this.state.password.value}
          placeholder="123456"
          onChange={this.updateState}/>
        </label>
        { this.error('password') }
        <label>Access: <input
          name="accessType"
          value={this.state.accessType.value}
          placeholder="Admin / User"
          onChange={this.updateState}/>
        </label>
        { this.error('accessType') }
        <button onClick={this.formIsValid}>Login</button>
      </article>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userLogin: (username, accessType) => dispatch(login(username, accessType)),
  userLogout: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(Auth);
