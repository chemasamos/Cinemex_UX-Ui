import React from 'react';
import styles from './MovieCard.module.css';

/**
 * Componente MovieCard
 *
 * Props:
 * - title, posterUrl, genre, duration, rating: datos de la película
 * - onSelect: función llamada con onClick cuando el usuario selecciona la película
 * - isSelected: booleano que indica si esta película está actualmente seleccionada
 */
const MovieCard = ({ title, posterUrl, genre, duration, rating, onSelect, isSelected }) => {
  return (
    // El estilo del borde cambia dinámicamente según isSelected (control de estado)
    <div
      className={styles.card}
      style={{
        outline: isSelected ? '3px solid #e50914' : 'none',
        transform: isSelected ? 'scale(1.03)' : 'scale(1)',
        transition: 'transform 0.2s ease, outline 0.2s ease',
      }}
    >
      <div className={styles.posterContainer}>
        <img src={posterUrl} alt={title} className={styles.poster} />
        <span className={styles.rating}>{rating}</span>
        {/* Insignia visible solo cuando la película está seleccionada */}
        {isSelected && (
          <span style={{
            position: 'absolute', top: '8px', left: '8px',
            backgroundColor: '#e50914', color: '#fff',
            fontSize: '0.7rem', fontWeight: 'bold',
            padding: '2px 8px', borderRadius: '4px',
          }}>
            ✓ Seleccionada
          </span>
        )}
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.details}>{genre} | {duration}</p>
        {/* onClick dispara onSelect, actualizando el estado en el componente padre */}
        <button
          className={styles.button}
          onClick={onSelect}
          style={{
            backgroundColor: isSelected ? '#b00710' : undefined,
          }}
        >
          {isSelected ? '✓ Seleccionada' : 'Seleccionar'}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;