import React from 'react';
import PromoCard from '../components/PromoCard';
import { promotions } from '../data/promotions';
import styles from './Otros.module.css';

const Otros = () => {
    return (
        <section className={styles.section} id="otros">
            <div className="container">
                <h2 className={styles.heading}>Otros</h2>
                <div className={styles.grid}>
                    {promotions.map(item => (
                        <PromoCard key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Otros;
