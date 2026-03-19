import { Link, NavLink } from 'react-router-dom';

/**
 * Componente Header — Barra de navegación reutilizable
 *
 * Props: ninguna (usa NavLink de react-router-dom internamente)
 * Reutilizado en: App.jsx como layout principal
 */
function Header() {
  const linkStyle = ({ isActive }) => ({
    fontWeight: 'bold',
    color: isActive ? 'var(--primary-red)' : 'var(--white)',
    textDecoration: 'none',
  });

  return (
    <header
      style={{
        backgroundColor: 'var(--secondary-black)',
        padding: '1rem 0',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        borderBottom: '2px solid var(--primary-red)',
      }}
    >
      <div
        className="container"
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      >
        {/* Logo — reutilizable como enlace a inicio */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h1 style={{ fontSize: '1.5rem', margin: 0, border: 'none', color: '#fff' }}>
            CINE<span style={{ color: 'var(--primary-red)' }}>MEX</span>
          </h1>
        </Link>

        {/* Navegación principal con NavLink activo */}
        <nav>
          <ul style={{ display: 'flex', listStyle: 'none', gap: '20px', margin: 0, padding: 0 }}>
            <li>
              <NavLink to="/cartelera" style={linkStyle}>Cartelera</NavLink>
            </li>
            <li>
              <NavLink to="/alimentos" style={linkStyle}>Alimentos</NavLink>
            </li>
            <li>
              <NavLink to="/otros" style={linkStyle}>Promociones</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
