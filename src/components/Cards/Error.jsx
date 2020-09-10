import React from 'react';
import styles from './Error.module.scss';

function Error() {
    return (
        <div className={styles.error}>
            Поле заполнено неверно!
        </div>
    );
}

export default Error;