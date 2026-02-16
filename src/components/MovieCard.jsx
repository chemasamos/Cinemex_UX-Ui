import React from 'react';
import styles from './MovieCard.module.css';

const MovieCard = ({ title, posterUrl, genre, duration, rating }) => {
  return (
    <div className={styles.card}>
      <div className={styles.posterContainer}>
        <img src={posterUrl} alt={title} className={styles.poster} />
        <span className={styles.rating}>{rating}</span>
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.details}>{genre} | {duration}</p>
        <button className={styles.button}>Ver Horarios</button>
      </div>
    </div>
  );
};

export default MovieCard;