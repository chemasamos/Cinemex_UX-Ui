import React from 'react';
import { Link } from 'react-router-dom';

/**
 * NotFound.jsx — Página de error 404
 *
 * CONCEPTOS DE REACT ROUTER DOM:
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * Ruta Comodín (path="*"):
 *   En React Router, el asterisco (*) actúa como un comodín o "catch-all".
 *   Significa que si la URL actual no coincide con NINGUNA de las rutas definidas
 *   previamente en <Routes>, se renderizará este componente de forma predeterminada.
 *   Esto es ideal para manejar errores 404 ("Página no encontrada") y mejorar la 
 *   experiencia del usuario al evitar que se quede en una página en blanco o rota.
 * ─────────────────────────────────────────────────────────────────────────────
 */
const NotFound = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100%',
      padding: '4rem 2rem',
      backgroundColor: '#1A1A1A',
      color: '#FFFFFF',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '4rem', color: '#E30613', margin: '0 0 1rem 0' }}>404</h1>
      <h2 style={{ fontSize: '2rem', margin: '0 0 2rem 0' }}>Página no encontrada</h2>
      <p style={{ marginBottom: '2rem', fontSize: '1.2rem', color: '#CCCCCC' }}>
        Lo sentimos, la página que buscas no existe o ha sido movida.
      </p>
      
      {/* Link de React Router para navegar internamente de vuelta al inicio */}
      <Link 
        to="/" 
        style={{
          backgroundColor: '#E30613',
          color: '#FFFFFF',
          padding: '0.8rem 1.5rem',
          textDecoration: 'none',
          borderRadius: '4px',
          fontWeight: 'bold',
          fontSize: '1.1rem'
        }}
      >
        Regresar al Inicio
      </Link>
    </div>
  );
};

export default NotFound;
