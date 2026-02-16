import React from 'react';
import styles from './FoodCard.module.css';

const FoodCard = ({ name, imageUrl, category, price }) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img src={imageUrl} alt={name} className={styles.image} />
                <span className={styles.category}>{category}</span>
            </div>
            <div className={styles.info}>
                <h3 className={styles.name}>{name}</h3>
                <div className={styles.footer}>
                    <span className={styles.price}>${price}.00</span>
                    <button className={styles.addButton}>Agregar</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
