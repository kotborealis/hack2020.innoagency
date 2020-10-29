import React from 'react';
import styles from './index.module.css';

export const MosHeader = () =>
    <div className={styles.header}>
        <div className={styles.headerCaption}>
            <span className={styles.headerLogo}>
                mos.ru
            </span>
            <span className={styles.headerText}>
                Официальный демо-сайт для хакатона
            </span>
        </div>
        <div className={styles.menu}>
            <div>Новости</div>
            <div>Афиша</div>
            <div>Услуги</div>
            <div>Мэр</div>
            <div>Власть</div>
            <div>Карта</div>
            <div>Мой район</div>
            <div className={styles.menuActiveItem}>Животные</div>
        </div>
    </div>