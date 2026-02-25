import { useState } from 'react';
import MovieCard from '../components/MovieCard';
import TicketForm from '../components/TicketForm';
import News from '../components/News';
import { movies } from '../data/movies';
import styles from './Cartelera.module.css';

/**
 * Página Cartelera — Integración principal de los requisitos académicos
 *
 * Demuestra:
 * 1. useState: estado de película seleccionada y estado de confirmación de compra
 * 2. onClick: pasado a MovieCard para actualizarlo al seleccionar una película
 * 3. Renderizado condicional: mensajes según el estado actual
 * 4. Integración de TicketForm (formulario controlado) y News (useEffect + JSON)
 */
const Cartelera = () => {
  // --- ESTADO 1: Película seleccionada actualmente ---
  // null indica que ninguna película ha sido elegida aún
  const [selectedMovie, setSelectedMovie] = useState(null);

  // --- ESTADO 2: ¿La compra fue confirmada? ---
  const [confirmed, setConfirmed] = useState(false);

  /**
   * handleSelectMovie — actualiza el estado cuando el usuario hace onClick en una película.
   * Si la misma película se vuelve a clickear, se deselecciona.
   * Al cambiar de película, se resetea la confirmación.
   */
  const handleSelectMovie = (movie) => {
    if (selectedMovie?.id === movie.id) {
      // Deseleccionar si ya estaba seleccionada
      setSelectedMovie(null);
    } else {
      setSelectedMovie(movie);
      setConfirmed(false); // Resetear confirmación al cambiar película
    }
  };

  return (
    <section className={styles.section} id="cartelera">
      <div className="container">
        <h2 className={styles.heading}>Cartelera</h2>

        {/* Mensaje de estado de selección — renderizado condicional con useState */}
        {selectedMovie ? (
          <p style={notifStyle.selected}>
            🎬 Película seleccionada: <strong>{selectedMovie.title}</strong>
          </p>
        ) : (
          <p style={notifStyle.hint}>
            👆 Selecciona una película para comprar tus boletos
          </p>
        )}

        {/* Mensaje de confirmación de compra — aparece tras onConfirm */}
        {confirmed && (
          <div style={notifStyle.confirmed}>
            ✅ ¡Compra confirmada con éxito! Disfruta tu película.
          </div>
        )}

        {/* Grid de películas — cada MovieCard recibe onSelect e isSelected */}
        <div className={styles.grid}>
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              {...movie}
              // onClick callback: actualiza el estado selectedMovie en este componente
              onSelect={() => handleSelectMovie(movie)}
              // Prop de estado activo: true solo para la película actualmente elegida
              isSelected={selectedMovie?.id === movie.id}
            />
          ))}
        </div>

        {/* Formulario de compra — solo visible si hay una película seleccionada */}
        {selectedMovie && (
          <TicketForm
            movie={selectedMovie.title}
            // onConfirm: callback que actualiza el estado confirmed a true
            onConfirm={() => setConfirmed(true)}
          />
        )}

        {/* Sección de noticias — siempre visible, carga datos con useEffect */}
        <News />
      </div>
    </section>
  );
};

// Estilos de las notificaciones de estado
const notifStyle = {
  selected: {
    backgroundColor: '#1a1a2e',
    border: '1px solid #e50914',
    borderRadius: '8px',
    padding: '0.75rem 1.25rem',
    color: '#f0f0f0',
    marginBottom: '1rem',
    fontSize: '0.95rem',
  },
  hint: {
    backgroundColor: '#0f3460',
    borderRadius: '8px',
    padding: '0.75rem 1.25rem',
    color: '#aaa',
    marginBottom: '1rem',
    fontSize: '0.95rem',
  },
  confirmed: {
    backgroundColor: '#0d2b1a',
    border: '2px solid #2ecc71',
    borderRadius: '10px',
    padding: '1rem 1.5rem',
    color: '#2ecc71',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    marginBottom: '1.5rem',
    textAlign: 'center',
  },
};

export default Cartelera;