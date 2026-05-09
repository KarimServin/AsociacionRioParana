import React from 'react';
import { navItems } from '../constants/navItems';

const Formacion = () => {
  const [capacitaciones, setCapacitaciones] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://rioparana.org.ar/cms/wp-json/wp/v2/capacitaciones')
      .then(res => res.json())
      .then(data => {
        setCapacitaciones(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="politicas" className="section-spacing bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-serif font-bold mb-6 text-white">Escuela de Gobierno</h2>
            <p className="text-lg text-blue-100 mb-10 leading-relaxed font-serif">
              Visión técnica y estratégica. Nuestros programas están diseñados para promover los valores humanos, el compromiso de la ciudadanía y la modernización institucional.
            </p>

            <div className="mb-10 min-h-[150px]">
              {loading ? (
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  <span className="text-blue-200 italic font-serif">Sincronizando capacitaciones...</span>
                </div>
              ) : capacitaciones.length > 0 ? (
                <ul className="space-y-6">
                  {capacitaciones.map((cap, i) => (
                    <li key={i} className="flex items-center gap-4 group cursor-pointer" onClick={() => window.location.href = `#/capacitaciones/${cap.id}`}>
                      <div className="w-6 h-6 rounded-full bg-blue-400/30 flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                      <span className="text-lg group-hover:text-blue-200 transition-colors font-serif">{cap.title.rendered}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-blue-300 italic font-serif">Próximamente nuevas convocatorias.</p>
              )}
            </div>

            <button 
              onClick={() => window.location.href = '#/capacitaciones'}
              className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors shadow-xl font-serif"
            >
              Ver Todas las Capacitaciones
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-white/10">
                <img 
                  src="/fotos/ImagenesUtiles/ValoresHumanos.webp" 
                  alt="Taller de formación en Valores Humanos y Ética" 
                  className="w-full h-full object-cover" 
                  width="400"
                  height="300"
                  referrerPolicy="no-referrer" 
                  loading="lazy" 
                />
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-white/10">
                <img 
                  src="/fotos/ImagenesUtiles/Ciudadania.webp" 
                  alt="Seminario sobre compromiso ciudadano y democracia" 
                  className="w-full h-full object-cover" 
                  width="400"
                  height="300"
                  referrerPolicy="no-referrer" 
                  loading="lazy" 
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg bg-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400&h=600" 
                  alt="Sesión de capacitación en la Escuela de Gobierno"
                  className="w-full h-full object-cover" 
                  width="400"
                  height="600"
                  referrerPolicy="no-referrer" 
                  loading="lazy" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formacion;
