import React from 'react';
import styles from './index.module.css';

export const MosBody = ({children}) =>
    <div className={styles.body}>
        {children}
    </div>