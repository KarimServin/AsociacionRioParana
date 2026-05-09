import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Articulos from './components/Articulos';

const ArticulosPage = () => {
  const { categoria } = useParams<{ categoria: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoria]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Articulos categoria={categoria} isPage={true} />
    </div>
  );
};

export default ArticulosPage;
