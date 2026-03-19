import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/Footer';
import Cartelera from './pages/Cartelera';
import Alimentos from './pages/Alimentos';
import Otros from './pages/Otros';
import Inicio from './pages/Inicio';
import Detalle from './pages/Detalle';
import MiCuenta from './pages/MiCuenta';
import './styles/global.css';

/**
 * App.jsx — Raíz de la aplicación y configuración del enrutador
 *
 * CONCEPTOS DE REACT ROUTER DOM:
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * BrowserRouter (alias Router):
 *   Envuelve TODA la aplicación y activa el sistema de rutas del lado del cliente.
 *   Usa la History API del navegador para cambiar la URL sin recargar la página.
 *   Debe ser el componente más externo que use rutas (padre de todo).
 *
 * Routes:
 *   Contenedor que evalúa todos sus hijos <Route> y renderiza SOLO el que
 *   coincida con la URL actual. Es exclusivo: solo renderiza la primera coincidencia.
 *
 * Route:
 *   Define la asociación entre una ruta (path) y un componente (element).
 *   - path="/ruta"      → URL exacta a detectar
 *   - element={<Comp/>} → Componente que se renderiza cuando hay coincidencia
 *
 * RUTAS ESTÁTICAS vs DINÁMICAS:
 *   - Estática: path="/cartelera" → siempre igual, no cambia
 *   - Dinámica: path="/pelicula/:id" → el segmento :id es variable.
 *     Ejemplos: /pelicula/1, /pelicula/5, /pelicula/10
 *     El componente Detalle.jsx lee ese :id con el hook useParams().
 *
 * LAYOUT GLOBAL (Header + Footer FUERA de Routes):
 *   Header y Footer se renderizan en TODAS las páginas porque están fuera
 *   del bloque <Routes>. Solo el contenido dentro de <main> cambia según la ruta.
 *   Este patrón se llama "layout persistente" o "shell layout".
 * ─────────────────────────────────────────────────────────────────────────────
 */

/**
 * AppContent — Componente interno que usa el contexto del Router.
 * Se separa de App() porque los hooks de React Router (useNavigate, useLocation,
 * etc.) solo funcionan dentro del árbol de BrowserRouter, no en el mismo
 * componente que lo define.
 */
function AppContent() {
  return (
    <div className="App" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      {/* Header fuera de Routes → se muestra en TODAS las páginas (layout global) */}
      <Header />

      {/* main ocupa todo el espacio disponible (flex: 1) para que el footer
          quede al final incluso en páginas con poco contenido */}
      <main style={{ flex: 1 }}>
        <Routes>
          {/* ── RUTAS ESTÁTICAS ───────────────────────────────────────────── */}

          {/* Página de inicio — héro + grid de películas + carrusel */}
          <Route path="/" element={<Inicio />} />

          {/* Cartelera — grid de películas + formulario de compra */}
          <Route path="/cartelera" element={<Cartelera />} />

          {/* Alimentos — menú por categoría + carrito */}
          <Route path="/alimentos" element={<Alimentos />} />

          {/* Otros — promociones disponibles */}
          <Route path="/otros" element={<Otros />} />

          {/* Mi Cuenta — perfil de usuario + historial de compras */}
          <Route path="/micuenta" element={<MiCuenta />} />

          {/* ── RUTA DINÁMICA ─────────────────────────────────────────────── */}
          {/* :id es un parámetro de ruta que puede ser cualquier valor.
              Detalle.jsx lo captura con useParams() para buscar la película. */}
          <Route path="/pelicula/:id" element={<Detalle />} />
        </Routes>
      </main>

      {/* Footer fuera de Routes → se muestra en TODAS las páginas (layout global) */}
      <Footer />
    </div>
  );
}

/**
 * App — Componente raíz.
 * BrowserRouter envuelve AppContent para que TODO el árbol tenga acceso
 * al contexto de React Router (rutas, navegación, parámetros).
 */
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;