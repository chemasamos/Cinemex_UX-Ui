import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/Footer';
import Cartelera from './pages/Cartelera';
import Alimentos from './pages/Alimentos';
import Otros from './pages/Otros';
import Inicio from './pages/Inicio';
import Detalle from './pages/Detalle';
import './styles/global.css';

// AppContent usa el contexto del Router, por eso vive dentro de <Router>
function AppContent() {
  return (
    <div className="App" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header reutilizable — contiene logo + NavLinks de navegación */}
      <Header />

      <main style={{ flex: 1 }}>
        <Routes>
          {/* Ruta raíz — página de bienvenida con grid de películas */}
          <Route path="/" element={<Inicio />} />

          {/* Ruta de detalle dinámico — :id es el parámetro de la película */}
          {/* Detalle.jsx lee el id con useParams() y busca la película en movies.js */}
          <Route path="/pelicula/:id" element={<Detalle />} />

          <Route path="/cartelera" element={<Cartelera />} />
          <Route path="/alimentos" element={<Alimentos />} />
          <Route path="/otros" element={<Otros />} />
        </Routes>
      </main>

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