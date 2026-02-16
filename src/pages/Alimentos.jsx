import React from 'react';
import FoodCard from '../components/FoodCard';
import { foods } from '../data/foods';
import styles from './Alimentos.module.css';

const Alimentos = () => {
    // Agrupar por categoría
    const categories = [...new Set(foods.map(food => food.category))];

    return (
        <section className={styles.section} id="alimentos">
            <div className="container">
                <h2 className={styles.heading}>Alimentos</h2>
                {categories.map(category => (
                    <div key={category} className={styles.categoryGroup}>
                        <h3 className={styles.categoryTitle}>{category}</h3>
                        <div className={styles.grid}>
                            {foods
                                .filter(food => food.category === category)
                                .map(food => (
                                    <FoodCard key={food.id} {...food} />
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Alimentos;
