import React, { useState } from 'react';
import FoodCard from '../components/FoodCard';
import { foods } from '../data/foods';
import styles from './Alimentos.module.css';

const Alimentos = () => {
    // --- ESTADO: carrito como arreglo de objetos ---
    // Cada vez que el usuario hace click en "Agregar", el item se añade al arreglo
    const [carrito, setCarrito] = useState([]);

    /**
     * agregarAlCarrito — actualiza el estado carrito añadiendo el item seleccionado.
     * Usa el spread operator para crear un nuevo arreglo (inmutabilidad de estado).
     */
    const agregarAlCarrito = (food) => {
        setCarrito((prev) => [...prev, food]);
    };

    // Agrupar por categoría
    const categories = [...new Set(foods.map(food => food.category))];

    // Calcular total del carrito
    const total = carrito.reduce((sum, item) => sum + item.price, 0);

    return (
        <section className={styles.section} id="alimentos">
            <div className="container">
                <h2 className={styles.heading}>Alimentos</h2>

                {/* Carrito — renderizado dinámico basado en el estado (arreglo) */}
                <div style={carritoStyle.bar}>
                    🛒 Carrito: <strong>{carrito.length}</strong> producto(s)
                    {carrito.length > 0 && (
                        <span style={carritoStyle.total}> | Total: <strong>${total}.00</strong></span>
                    )}
                </div>

                {categories.map(category => (
                    <div key={category} className={styles.categoryGroup}>
                        <h3 className={styles.categoryTitle}>{category}</h3>
                        <div className={styles.grid}>
                            {foods
                                .filter(food => food.category === category)
                                .map(food => (
                                    <FoodCard
                                        key={food.id}
                                        {...food}
                                        onAdd={() => agregarAlCarrito(food)}
                                    />
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

const carritoStyle = {
    bar: {
        backgroundColor: '#1a1a2e',
        border: '1px solid #e50914',
        borderRadius: '8px',
        padding: '0.75rem 1.25rem',
        color: '#f0f0f0',
        marginBottom: '1.5rem',
        fontSize: '0.95rem',
    },
    total: {
        color: '#aaa',
    },
};

export default Alimentos;

