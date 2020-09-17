import React from 'react';
import styles from './Profile.module.scss';

function Profile() {
  return (
    <article className={styles.profile}>
      <img className={styles.profile__img} src='https://avatars.mds.yandex.net/get-pdb/251121/19de4296-f4da-4d9b-9ecb-1987c5b91974/s1200?webp=false' alt=""/>
      <section>
        <div className={styles.profile__title}>
          <h2>Конь</h2>
        </div>
      </section>
    </article>
  );
}

export default Profile;