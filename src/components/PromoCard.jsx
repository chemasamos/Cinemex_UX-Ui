import React from 'react';
import styles from './PromoCard.module.css';

const PromoCard = ({ title, description, imageUrl }) => {
    return (
        <div className={styles.card} style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className={styles.overlay}>
                <div className={styles.content}>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.description}>{description}</p>
                    <button className={styles.link}>Más Información →</button>
                </div>
            </div>
        </div>
    );
};

export default PromoCard;
