import React from 'react';
import MovieCard from '../components/MovieCard';
import { movies } from '../data/movies';
import styles from './Cartelera.module.css';

const Cartelera = () => {
  return (
    <section className={styles.section} id="cartelera">
      <div className="container">
        <h2 className={styles.heading}>Cartelera</h2>
        <div className={styles.grid}>
          {movies.map(movie => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cartelera;