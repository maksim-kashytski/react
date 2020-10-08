import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions';
import styles from './Profile.module.scss'

const imageURL = 'https://f3.upet.com/p_DW5Je51rHf_H.jpg';

const Profile = ({ username, accessType, signOut } ) => {
  return (
    <article className={styles.profile}>
      <img className={styles.profile__img} src={imageURL} alt=""/>
      <section className={styles.profile__title}>
        <h2>{`${username} (${accessType})`}</h2>
        <button className={styles.profile__button} onClick={signOut}>LOGOUT</button>
      </section>
    </article>
  );
};

const mapStateToProps = (state) => ({
  username: state.auth.username,
  accessType: state.auth.accessType,
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
