import { useParams, useNavigate } from 'react-router-dom';
import { movies } from '../data/movies';

/**
 * Página Detalle — Muestra los datos reales de una película
 *
 * Hooks usados:
 * - useParams: lee el parámetro :id de la URL (/pelicula/:id)
 * - useNavigate: para el botón "Volver"
 *
 * Flujo:
 * 1. useParams() extrae el id de la URL como string ("1", "2", etc.)
 * 2. Se convierte a número con Number() para comparar con movie.id
 * 3. Se busca la película en movies[] con .find()
 * 4. Si no existe, se muestra un mensaje de error
 * 5. Si existe, se muestran todos sus datos reales
 */
function Detalle() {
  // useParams devuelve un objeto con los parámetros dinámicos de la ruta
  // Si la URL es /pelicula/3, entonces params.id === "3"
  const { id } = useParams();
  const navigate = useNavigate();

  // Buscamos la película cuyo id coincide con el de la URL
  // Number(id) convierte el string "3" al número 3 para comparar correctamente
  const pelicula = movies.find((m) => m.id === Number(id));

  // --- Renderizado condicional: película no encontrada ---
  if (!pelicula) {
    return (
      <main style={styles.container}>
        <p style={styles.errorText}>❌ Película no encontrada.</p>
        <button style={styles.backBtn} onClick={() => navigate('/')}>
          ← Volver al inicio
        </button>
      </main>
    );
  }

  // --- Renderizado normal: datos reales de la película ---
  return (
    <main style={styles.container}>

      {/* Botón para regresar a la página anterior */}
      <button style={styles.backBtn} onClick={() => navigate(-1)}>
        ← Volver
      </button>

      <div style={styles.card}>
        {/* Poster de la película */}
        <img
          src={pelicula.posterUrl}
          alt={pelicula.title}
          style={styles.poster}
        />

        {/* Información detallada */}
        <div style={styles.info}>
          <h2 style={styles.title}>{pelicula.title}</h2>

          <div style={styles.meta}>
            <span style={styles.badge}>{pelicula.rating}</span>
            <span style={styles.metaText}>📽 {pelicula.genre}</span>
            <span style={styles.metaText}>⏱ {pelicula.duration}</span>
          </div>

          <p style={styles.description}>
            Disfruta de <strong>{pelicula.title}</strong> en la gran pantalla.
            Una experiencia cinematográfica que no te puedes perder.
          </p>

          <button
            style={styles.cta}
            onClick={() => navigate('/cartelera')}
          >
            🎟️ Comprar boletos
          </button>
        </div>
      </div>

    </main>
  );
}

// Estilos del componente
const styles = {
  container: {
    maxWidth: '900px',
    margin: '2rem auto',
    padding: '0 1rem',
  },
  backBtn: {
    backgroundColor: 'transparent',
    color: 'var(--gray-text)',
    border: '1px solid #444',
    borderRadius: '6px',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    fontSize: '0.9rem',
    marginBottom: '1.5rem',
    transition: 'color 0.2s ease',
  },
  card: {
    display: 'flex',
    gap: '2rem',
    backgroundColor: '#1a1a2e',
    borderRadius: '12px',
    padding: '2rem',
    border: '1px solid #333',
    flexWrap: 'wrap',
  },
  poster: {
    width: '260px',
    borderRadius: '8px',
    objectFit: 'cover',
    flexShrink: 0,
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    flex: 1,
  },
  title: {
    fontSize: '2rem',
    color: 'var(--white)',
    margin: 0,
    borderBottom: '3px solid var(--primary-red)',
    paddingBottom: '0.5rem',
  },
  meta: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  badge: {
    backgroundColor: 'var(--primary-red)',
    color: '#fff',
    fontWeight: 'bold',
    padding: '2px 10px',
    borderRadius: '4px',
    fontSize: '0.85rem',
  },
  metaText: {
    color: 'var(--gray-text)',
    fontSize: '0.95rem',
  },
  description: {
    color: 'var(--gray-text)',
    lineHeight: '1.7',
    fontSize: '1rem',
  },
  cta: {
    backgroundColor: 'var(--primary-red)',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '0.8rem 1.5rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    alignSelf: 'flex-start',
    transition: 'opacity 0.2s ease',
  },
  errorText: {
    color: 'var(--gray-text)',
    fontSize: '1.1rem',
    marginBottom: '1rem',
  },
};

export default Detalle;