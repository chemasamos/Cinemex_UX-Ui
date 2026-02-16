import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import Cartelera from './pages/Cartelera';
import Alimentos from './pages/Alimentos';
import Otros from './pages/Otros';
import Inicio from './pages/Inicio';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header style={{
          backgroundColor: 'var(--secondary-black)',
          padding: '1rem 0',
          position: 'sticky',
          top: 0,
          zIndex: 100,
          borderBottom: '2px solid var(--primary-red)'
        }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <h1 style={{ fontSize: '1.5rem', margin: 0, border: 'none', color: '#fff' }}>
                CINE<span style={{ color: 'var(--primary-red)' }}>MEX</span>
              </h1>
            </Link>
            <nav>
              <ul style={{ display: 'flex', listStyle: 'none', gap: '20px', margin: 0, padding: 0 }}>
                <li>
                  <NavLink
                    to="/cartelera"
                    style={({ isActive }) => ({
                      fontWeight: 'bold',
                      color: isActive ? 'var(--primary-red)' : 'var(--white)'
                    })}
                  >
                    Cartelera
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/alimentos"
                    style={({ isActive }) => ({
                      fontWeight: 'bold',
                      color: isActive ? 'var(--primary-red)' : 'var(--white)'
                    })}
                  >
                    Alimentos
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/otros"
                    style={({ isActive }) => ({
                      fontWeight: 'bold',
                      color: isActive ? 'var(--primary-red)' : 'var(--white)'
                    })}
                  >
                    Promociones
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/cartelera" element={<Cartelera />} />
            <Route path="/alimentos" element={<Alimentos />} />
            <Route path="/otros" element={<Otros />} />
          </Routes>
        </main>

        <footer style={{
          backgroundColor: 'var(--secondary-black)',
          padding: '2rem 0',
          textAlign: 'center',
          marginTop: 'auto', // Push to bottom if content is short
          borderTop: '1px solid #333'
        }}>
          <p style={{ margin: 0 }}>&copy; 2024 Cinemex Clone - Proyecto Educativo</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;