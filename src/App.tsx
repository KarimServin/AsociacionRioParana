import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import BarraNavegacion from './components/BarraNavegacion';
import Portada from './components/Portada';
import Institucional from './components/Institucional';
import Presidente from './components/Presidente';
import Encuentros from './components/Encuentros';
import Proyectos from './components/Proyectos';
import Formacion from './components/Formacion';
import Articulos from './components/Articulos';
import SeccionSuma from './components/SeccionSuma';
import PiePagina from './components/PiePagina';
const NosotrosPage = lazy(() => import('./NosotrosPage'));
const ArticulosPage = lazy(() => import('./ArticulosPage'));
const GrupoJovenPage = lazy(() => import('./GrupoJovenPage'));
const NosAcompananPage = lazy(() => import('./NosAcompananPage'));
const ContactoPage = lazy(() => import('./ContactoPage'));
const IniciativasPage = lazy(() => import('./IniciativasPage'));
const IniciativaDetallePage = lazy(() => import('./IniciativaDetallePage'));
const CapacitacionesPage = lazy(() => import('./CapacitacionesPage'));
const CapacitacionDetallePage = lazy(() => import('./CapacitacionDetallePage'));
const ArticuloDetallePage = lazy(() => import('./ArticuloDetallePage'));
import ScrollToTop from './components/ScrollToTop';

interface LayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      <BarraNavegacion />
      <main>
        <Suspense fallback={<div className="h-screen flex items-center justify-center"><div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin" /></div>}>
          {children}
        </Suspense>
      </main>
      <PiePagina />
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Portada />
      <Institucional />
      <Presidente />
      <Encuentros />
      <Proyectos />
      <Formacion />
      <Articulos />
      <SeccionSuma 
        titulo="¿Querés sumarte?"
        subtitulo="Sumate a nuestro equipo de voluntarios y ayudanos a construir el futuro de nuestra región."
        textoBoton="Contactar ahora"
      />
    </>
  );
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout><HomePage /></MainLayout>} path="/" />
        <Route element={<MainLayout><NosotrosPage /></MainLayout>} path="/nosotros" />
        <Route element={<MainLayout><GrupoJovenPage /></MainLayout>} path="/grupo-joven" />
        <Route element={<MainLayout><NosAcompananPage /></MainLayout>} path="/nos-acompanan" />
        <Route element={<MainLayout><ContactoPage /></MainLayout>} path="/contacto" />
        <Route element={<MainLayout><IniciativasPage /></MainLayout>} path="/iniciativas" />
        <Route element={<MainLayout><IniciativaDetallePage /></MainLayout>} path="/iniciativas/:id" />
        <Route element={<MainLayout><CapacitacionesPage /></MainLayout>} path="/capacitaciones" />
        <Route element={<MainLayout><CapacitacionDetallePage /></MainLayout>} path="/capacitaciones/:id" />
        <Route element={<MainLayout><ArticulosPage /></MainLayout>} path="/articulos/:categoria" />
        <Route element={<Navigate to="/articulos/publicaciones" replace />} path="/articulos" />
        <Route element={<MainLayout><ArticuloDetallePage /></MainLayout>} path="/articulos/:categoria/:id" />
      </Routes>
    </HashRouter>
  );
}
