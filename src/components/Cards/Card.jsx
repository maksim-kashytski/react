import React from 'react';
import styles from './Card.module.scss';
import PropTypes from 'prop-types';

function Card({ profile }) {
  const {price, title, imageURL, gender} = profile;

  return (
    <article className={styles.profile}>
      <img className={styles.profile__img} src={imageURL} alt=""/>
      <section>
        <h2>{title}</h2>
        <p>{gender}</p>
        <p>{price}</p>
      </section>
    </article>
  );
}

Card.propTypes = {
  profile: PropTypes.object,
};

export default Card;
