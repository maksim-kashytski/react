import React from 'react';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <a className={styles.footer__link} href="#">About</a>
      <a className={styles.footer__link} href="#">Help</a>
      <a className={styles.footer__link} href="#">FAQ</a>
    </footer>
  );
}

export default Footer;
