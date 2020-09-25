import React from 'react';
import styles from './Card.module.scss';
import PropTypes from 'prop-types';

function Card({ profile, removeItem }) {
  const { id, price, title, imageURL, gender } = profile;

  return (
    <article className={styles.profile}>
      <img className={styles.profile__img} src={imageURL} alt=""/>
      <section>
        <div className={styles.profile__title}>
          <h2>{title}</h2>
          <button className={styles.profile__button} onClick={() => removeItem(id)}>X</button>
        </div>
        <p>{gender}</p>
        <p>{price}</p>
      </section>
    </article>
  );
}

Card.propTypes = {
  profile: PropTypes.object,
  removeItem: PropTypes.func,
};

export default Card;
