import React from 'react';
import styles from './Card.module.scss';

function Card({ profile, removeItem }) {
  const { id, price, title, imageURL, gender } = profile;

  const remove = () => removeItem(id);

  return (
    <article className={styles.profile}>
      <img className={styles.profile__img} src={imageURL} alt=""/>
      <section>
        <div className={styles.profile__title}>
          <h2>{title}</h2>
          <button className={styles.profile__button} onClick={remove}>X</button>
        </div>
        <p>{gender}</p>
        <p>{price}</p>
      </section>
    </article>
  );
}

export default Card;
