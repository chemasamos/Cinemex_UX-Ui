import React from 'react';
import styles from './Inicio.module.css';

const Inicio = () => {
    return (
        <section className={styles.section}>
            <div className={styles.hero}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Bienvenido a <span className={styles.brand}>CINEMEX</span></h1>
                    <p className={styles.subtitle}>La Magia del Cine</p>
                    <div className={styles.actions}>
                        <p>Selecciona una opción del menú para comenzar</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Inicio;
