import React from 'react';
import styles from './FoodCard.module.css';

/**
 * Componente FoodCard — Tarjeta de alimento
 *
 * Props:
 * - name, imageUrl, category, price: datos del producto
 * - onAdd: función llamada con onClick cuando el usuario agrega el item al carrito
 */
const FoodCard = ({ name, imageUrl, category, price, onAdd }) => {
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
                    {/* onClick dispara onAdd, que actualiza el estado carrito en el padre */}
                    <button className={styles.addButton} onClick={onAdd}>Agregar</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;

