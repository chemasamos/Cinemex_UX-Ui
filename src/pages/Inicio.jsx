import { useNavigate } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import MovieCarousel from '../components/MovieCarousel';
import { movies } from '../data/movies';
import styles from './Inicio.module.css';

/**
 * Página Inicio — Hero de bienvenida + grid de películas destacadas
 *
 * Hooks usados:
 * - useNavigate: para navegar programáticamente a /pelicula/:id
 *
 * Conceptos demostrados:
 * - useNavigate y navegación imperativa con parámetros de ruta
 * - Renderizado de lista con .map() y componente reutilizable <MovieCard>
 * - Paso de props y callbacks (onVerDetalle)
 */
const Inicio = () => {
    // useNavigate devuelve una función que permite navegar sin recargar la página
    const navigate = useNavigate();

    /**
     * irADetalle — navega a la ruta dinámica /pelicula/:id
     * @param {number} id — el id de la película seleccionada
     */
    function irADetalle(id) {
        navigate(`/pelicula/${id}`);
    }

    return (
        <section className={styles.section}>

            {/* ── Hero ── */}
            <div className={styles.hero}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Bienvenido a <span className={styles.brand}>CINEMEX</span>
                    </h1>
                    <p className={styles.subtitle}>La Magia del Cine</p>
                    <p className={styles.hint}>
                        Elige una película para ver sus detalles
                    </p>
                </div>
            </div>

            {/* ── Grid de películas ── */}
            <div className="container">
                <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                    Películas en Cartelera
                </h2>

                <div className={styles.grid}>
                    {/*
            .map() recorre el array de películas y renderiza un <MovieCard> por cada una.
            onVerDetalle es un callback que llama a irADetalle con el id de esa película.
            La prop key es obligatoria en listas para que React identifique cada elemento.
          */}
                    {movies.map((pelicula) => (
                        <MovieCard
                            key={pelicula.id}
                            title={pelicula.title}
                            posterUrl={pelicula.posterUrl}
                            genre={pelicula.genre}
                            duration={pelicula.duration}
                            rating={pelicula.rating}
                            onSelect={() => irADetalle(pelicula.id)}
                        />
                    ))}
                </div>
            </div>

            {/* ── Sección ESTRENOS con carrusel ── */}
            <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px' }}>
                <h2 style={{ marginBottom: '0.5rem' }}>ESTRENOS</h2>
                <MovieCarousel movies={movies} onSelect={irADetalle} />
            </section>

        </section>
    );
};

export default Inicio;
