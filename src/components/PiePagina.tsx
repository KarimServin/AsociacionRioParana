import { ArrowRight, Facebook, Instagram, Youtube } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { navItems } from '../constants/navItems';

const PiePagina = () => {
  const navigate = useNavigate();
  const asociacionItems = navItems.find(item => item.name === 'La Asociación')?.children || [];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Slogan Centrado */}
        <div className="border-b border-white/5 pb-10 mb-10 text-center">
          <p className="text-xl md:text-2xl font-serif text-slate-200 max-w-4xl mx-auto leading-relaxed">
            Trabajando para nuestra región desde hace más de 12 años con compromiso, transparencia y valores ciudadanos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-10 items-start">
          {/* Columna 1: Contacto y Redes */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-white font-bold mb-6 text-base tracking-wider uppercase">Contacto</h3>
            <ul className="space-y-3 mb-8 flex flex-col items-center lg:items-start text-xs text-slate-300">
              <li>
                <a href="https://wa.me/5493424050015" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  +54 9 342 405-0015
                </a>
              </li>
              <li>
                <a href="mailto:info@rioparana.org.ar" className="hover:text-white transition-colors">
                  info@rioparana.org.ar
                </a>
              </li>
              <li className="text-slate-400">
                Santa Fe Capital
              </li>
            </ul>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <a href="https://www.facebook.com/asociacioncivilrioparana" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all group" title="Facebook">
                <Facebook size={16} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://x.com/rioparanastafe" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all group" title="X">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/rioparana.stafe/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all group" title="Instagram">
                <Instagram size={16} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.youtube.com/user/AsocCivilRioParana" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all group" title="YouTube">
                <Youtube size={16} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <div className="text-center lg:text-left">
              <h3 className="text-white font-bold mb-6 text-base tracking-wider uppercase">Institucional</h3>
              <ul className="space-y-3 flex flex-col items-center lg:items-start">
                <li>
                  <button onClick={() => { navigate('/nosotros'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors cursor-pointer text-xs">
                    Sobre Nosotros
                  </button>
                </li>
                <li>
                  <button onClick={() => { navigate('/nos-acompanan'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors cursor-pointer text-xs">
                    Auspiciantes
                  </button>
                </li>
                <li>
                  <button onClick={() => { navigate('/grupo-joven'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors cursor-pointer text-xs">
                    Grupo Joven
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <div className="text-center lg:text-left">
              <h3 className="text-white font-bold mb-6 text-base tracking-wider uppercase">Explorar</h3>
              <ul className="space-y-3 flex flex-col items-center lg:items-start">
                <li>
                  <button onClick={() => { navigate('/iniciativas'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors cursor-pointer text-xs">
                    Nuestras Iniciativas
                  </button>
                </li>
                <li>
                  <button onClick={() => { navigate('/articulos/informes'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors cursor-pointer text-xs">
                    Informes Técnicos
                  </button>
                </li>
                <li>
                  <button onClick={() => { navigate('/articulos/publicaciones'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors cursor-pointer text-xs">
                    Últimas Publicaciones
                  </button>
                </li>
                <li>
                  <button onClick={() => { navigate('/contacto'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors cursor-pointer text-xs">
                    Contacto y Prensa
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Columna 4: Suscripción */}
          <div className="flex flex-col items-center lg:items-end text-center lg:text-right">
            <div className="max-w-xs w-full">
              <h3 className="text-white font-bold mb-6 text-base tracking-wider uppercase">Novedades</h3>
              <p className="text-xs mb-4">Mantenete informado sobre la realidad regional.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs w-full focus:outline-none focus:border-primary transition-all placeholder:text-slate-600" 
                  placeholder="Tu correo" 
                />
                <button 
                  className="bg-primary hover:bg-primary/80 text-white px-3.5 py-2.5 rounded-xl transition-all shadow-lg shadow-primary/20"
                  aria-label="Suscribirse al boletín"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col items-center text-slate-400">
          <div className="text-center">
            <p className="text-[13px] md:text-sm">© {new Date().getFullYear()} Asociación Civil Río Paraná. Institución apartidaria sin fines de lucro.</p>
            <a href="https://servin.com.ar/" target="_blank" rel="noopener noreferrer" className="mt-4 block hover:text-primary transition-all text-[11px] font-semibold uppercase tracking-[0.2em] opacity-80 hover:opacity-100">
              Desarrollo web Servin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PiePagina;
