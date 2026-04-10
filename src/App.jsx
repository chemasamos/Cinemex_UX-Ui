import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';
import './styles/global.css';

/**
 * App.jsx — Raíz de la aplicación y Layout Global
 *
 * CONCEPTOS DE REACT Y REFACTORIZACIÓN:
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * Principio de Responsabilidad Única (SRP):
 *   Se ha extraído el sistema de rutas a un archivo propio (src/routes/AppRoutes.jsx).
 *   Ahora App.jsx se encarga EXCLUSIVAMENTE de proveer el contexto del Router y 
 *   definir el "Layout Persistente" o base visual de la aplicación (Header y Footer),
 *   mientras que AppRoutes gestiona la lógica para renderizar las vistas en base a la URL.
 *   Esto es fundamental para mantener el código más limpio de cara al futuro.
 *
 * Limpieza (Código Muerto):
 *   Se limpiaron páginas y archivos huérfanos sin uso como Home.jsx y un duplicate 
 *   news.json ya que el código no usado ensucia la mantenibilidad.
 * 
 * BrowserRouter (alias Router):
 *   Envuelve TODA la aplicación y activa la History API para navegación SPA.
 * ─────────────────────────────────────────────────────────────────────────────
 */

function AppContent() {
  return (
    <div className="App" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      {/* Header importado del nuevo archivo renombrado Header.jsx */}
      <Header />

      {/* El main agrupa el contenido cambiante gestionado por las rutas */}
      <main style={{ flex: 1 }}>
        <AppRoutes />
      </main>

      {/* Footer se muestra en TODAS las páginas de manera persistente */}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;