import { Link, NavLink } from 'react-router-dom';

/**
 * Componente Header — Barra de navegación reutilizable y persistente
 *
 * CONCEPTOS DE REACT ROUTER DOM:
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * Link vs NavLink:
 *   - <Link to="/ruta">    → Enlace básico de React Router. Navega sin recargar
 *                            la página (igual que <a> pero con SPA routing).
 *                            No sabe si la ruta está activa o no.
 *
 *   - <NavLink to="/ruta"> → Versión especial de Link que sabe si la ruta que
 *                            enlaza es la URL actual. Cuando coincide, React Router
 *                            pasa isActive=true a la función de estilo/className.
 *
 * isActive en NavLink:
 *   NavLink acepta una función como valor de style o className.
 *   Esa función recibe un objeto { isActive, isPending } que React Router
 *   actualiza automáticamente según la URL actual.
 *   Usamos isActive para cambiar el color del enlace al rojo de la marca
 *   (#E30613 / --primary-red) cuando el usuario está en esa página.
 *
 * Por qué el Header es sticky y está FUERA de <Routes>:
 *   - Estar fuera de Routes significa que siempre se renderiza, sin importar
 *     qué página esté activa. Esto crea el "layout persistente".
 *   - position: sticky con top: 0 hace que el header siga al usuario al hacer
 *     scroll, mejorando la accesibilidad de la navegación.
 *   - z-index: 100 asegura que el header quede encima de cualquier otro elemento.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * Props: ninguna — usa los hooks de React Router internamente.
 */
function Header() {
  /**
   * linkStyle — función de estilo para NavLink.
   * React Router la llama cada vez que cambia la URL, pasando { isActive }.
   * Retorna un objeto de estilos CSS en línea que cambia según la ruta activa.
   */
  const linkStyle = ({ isActive }) => ({
    fontWeight: 'bold',
    // Si el enlace corresponde a la ruta actual → rojo de la marca
    // Si no → blanco estándar
    color: isActive ? 'var(--primary-red)' : 'var(--white)',
    textDecoration: 'none',
  });

  return (
    <header
      style={{
        backgroundColor: 'var(--secondary-black)',
        padding: '1rem 0',
        // sticky: el header se queda fijo al hacer scroll hacia abajo
        position: 'sticky',
        top: 0,
        // z-index alto para que quede por encima de otros elementos
        zIndex: 100,
        borderBottom: '2px solid var(--primary-red)',
      }}
    >
      <div
        className="container"
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      >
        {/* Logo — usa <Link> (no NavLink) porque no necesita estado activo.
            to="/" navega al inicio sin recargar la página. */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h1 style={{ fontSize: '1.5rem', margin: 0, border: 'none', color: '#fff' }}>
            CINE<span style={{ color: 'var(--primary-red)' }}>MEX</span>
          </h1>
        </Link>

        {/* Navegación principal — todos los enlaces usan NavLink con linkStyle
            para resaltar automáticamente el enlace de la página actual. */}
        <nav>
          <ul style={{ display: 'flex', listStyle: 'none', gap: '20px', margin: 0, padding: 0 }}>
            <li>
              {/* NavLink "Cartelera" → se pone rojo cuando la URL es /cartelera */}
              <NavLink to="/cartelera" style={linkStyle}>Cartelera</NavLink>
            </li>
            <li>
              {/* NavLink "Alimentos" → se pone rojo cuando la URL es /alimentos */}
              <NavLink to="/alimentos" style={linkStyle}>Alimentos</NavLink>
            </li>
            <li>
              {/* NavLink "Promociones" → se pone rojo cuando la URL es /otros */}
              <NavLink to="/otros" style={linkStyle}>Promociones</NavLink>
            </li>
            <li>
              {/* NavLink "Mi Cuenta" → se pone rojo cuando la URL es /micuenta */}
              <NavLink to="/micuenta" style={linkStyle}>Mi Cuenta</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
