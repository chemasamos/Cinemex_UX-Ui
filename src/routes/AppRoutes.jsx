import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from '../pages/Inicio';
import Cartelera from '../pages/Cartelera';
import Detalle from '../pages/Detalle';
import Alimentos from '../pages/Alimentos';
import Otros from '../pages/Otros';
import MiCuenta from '../pages/MiCuenta';
import NotFound from '../pages/NotFound';

/**
 * AppRoutes.jsx — Componente para gestionar todas las rutas de la aplicación
 *
 * CONCEPTOS DE REACT Y DECISIONES TÉCNICAS:
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * Principio de Responsabilidad Única (SRP - Single Responsibility Principle):
 *   Este principio establece que un componente debe tener una única razón para 
 *   cambiar o una única responsabilidad.
 *   Al separar las rutas de App.jsx a AppRoutes.jsx, cumplimos con SRP:
 *     - App.jsx se encarga exclusivamente del Layout Global (Header, Footer, providers).
 *     - AppRoutes.jsx se encarga exclusivamente de la lógica de navegación (qué 
 *       componente renderizar según la URL).
 *   
 * Mantenibilidad y Escalabilidad:
 *   Esta estructura facilita agregar nuevas rutas en el futuro, ya que el archivo 
 *   AppRoutes.jsx agrupa todas las definiciones y reduce el ruido visual en el 
 *   componente principal App.jsx.
 * 
 * Código Muerto y Limpieza:
 *   Durante esta optimización se eliminó Home.jsx y un archivo news.json duplicado,
 *   ya que mantener código muerto o sin uso confunde a otros desarrolladores y 
 *   aumenta innecesariamente el tamaño del proyecto.
 * ─────────────────────────────────────────────────────────────────────────────
 */
const AppRoutes = () => {
  return (
    <Routes>
      {/* ── RUTAS ESTÁTICAS ───────────────────────────────────────────── */}
      <Route path="/" element={<Inicio />} />
      <Route path="/cartelera" element={<Cartelera />} />
      <Route path="/alimentos" element={<Alimentos />} />
      <Route path="/otros" element={<Otros />} />
      <Route path="/micuenta" element={<MiCuenta />} />

      {/* ── RUTA DINÁMICA ─────────────────────────────────────────────── */}
      <Route path="/pelicula/:id" element={<Detalle />} />

      {/* ── RUTA COMODÍN (404) ──────────────────────────────────────── */}
      {/* 
        El comodín "*" atrapa cualquier ruta que no haya hecho match con las anteriores.
        Gracias a esto, podemos renderizar la página NotFound para manejar errores
        de URLs inexistentes.
      */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
