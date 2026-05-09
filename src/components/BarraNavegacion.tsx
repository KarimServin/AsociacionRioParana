import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { navItems } from '../constants/navItems';
import { fetchWP } from '../services/api';

const BarraNavegacion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  const [menuItems, setMenuItems] = useState(navItems);
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const isSolid = scrolled || !isHomePage;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    fetchWP('capacitaciones', { _fields: 'id,title' })
      .then(data => {
        const dynamicChildren = data.map((item: any) => ({
          name: item.title.rendered,
          href: `/capacitaciones/${item.id}`,
          isRoute: true
        }));

        setMenuItems(prev => prev.map(item => {
          if (item.name === 'Formación y Capacitación') {
            return {
              ...item,
              children: [
                { name: 'Ver todos los cursos', href: '/capacitaciones', isRoute: true },
                ...dynamicChildren
              ]
            }
          }
          return item;
        }));
      })
      .catch(err => console.error('Error fetching capacitaciones:', err));

    fetchWP('iniciativas', { _fields: 'id,title' })
      .then(data => {
        const dynamicChildren = data.map((item: any) => ({
          name: item.title.rendered,
          href: `/iniciativas/${item.id}`,
          isRoute: true
        }));

        setMenuItems(prev => prev.map(item => {
          if (item.name === 'Áreas y Proyectos') {
            return {
              ...item,
              children: [
                { name: 'Ver todas las iniciativas', href: '/iniciativas', isRoute: true },
                ...dynamicChildren
              ]
            }
          }
          return item;
        }));
      })
      .catch(err => console.error('Error fetching iniciativas:', err));
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isSolid ? 'glass-nav py-2 md:py-3' : 'bg-transparent py-3 md:py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16 md:h-24">
        <button
          onClick={() => { navigate('/'); window.scrollTo(0, 0); }}
          className="relative flex items-center gap-3 group h-auto py-2 focus:outline-none cursor-pointer"
          aria-label="Ir al inicio"
        >
          <div className="relative">
            <img
              src="/logos/Logos_2026/logo_26.png"
              alt="Logo"
              className="h-15 md:h-18 w-auto object-contain transition-all duration-500"
              fetchPriority="high"
              decoding="async"
            />
          </div>

          <div className="flex flex-col items-start leading-none group-hover:translate-x-1 transition-transform duration-300 ml-3">
            <span className={`text-[12px] md:text-sm font-bold uppercase tracking-[0.2em] transition-colors duration-500 ${isSolid ? 'text-slate-400' : 'text-white/60'}`}>
              Asociación Civil
            </span>
            <span className={`text-2xl md:text-4xl font-serif font-bold italic transition-colors duration-500 ml-0.5 ${isSolid ? 'text-primary' : 'text-white'}`}>
              Río Paraná
            </span>
          </div>
        </button>

        <div className="hidden lg:flex items-center gap-5">
          {menuItems.map((item) =>
            !item.children || item.children.length === 0 ? (
              <button
                key={item.name}
                onClick={item.isRoute ? () => { navigate(item.href || ''); window.scrollTo(0, 0); } : undefined}
                className={`text-[17px] font-semibold whitespace-nowrap transition-colors focus:outline-none ${isSolid ? 'text-slate-600 hover:text-primary' : 'text-white/90 hover:text-white'}`}
              >
                {item.isRoute ? <span>{item.name}</span> : <a href={item.href}>{item.name}</a>}
              </button>
            ) : (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className={`flex items-center gap-1 text-[17px] font-semibold whitespace-nowrap transition-colors focus:outline-none ${isSolid ? 'text-slate-600 hover:text-primary' : 'text-white/90 hover:text-white'}`}
                >
                  {item.name}
                  <ChevronRight size={14} className={`transition-transform duration-200 ${openDropdown === item.name ? 'rotate-90' : ''}`} />
                </button>

                <AnimatePresence>
                  {openDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden py-2"
                    >
                      {item.children.map((child) => (
                        <a
                          key={child.name}
                          href={child.isRoute ? undefined : child.href}
                          target={child.isExternal ? "_blank" : undefined}
                          rel={child.isExternal ? "noopener noreferrer" : undefined}
                          onClick={child.isRoute ? (e) => { e.preventDefault(); navigate(child.href || ''); setOpenDropdown(null); } : undefined}
                          className="block px-5 py-3 text-sm text-slate-600 hover:bg-accent hover:text-primary transition-colors font-medium cursor-pointer"
                        >
                          {child.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          )}
          <button
            onClick={() => navigate('/contacto')}
            className="btn-primary"
          >
            Contacto
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? (
            <X className={isSolid ? 'text-slate-800' : 'text-white'} />
          ) : (
            <Menu className={isSolid ? 'text-slate-800' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-1">
              {menuItems.map((item) =>
                !item.children || item.children.length === 0 ? (
                  <button
                    key={item.name}
                    onClick={() => {
                      if (item.isRoute) {
                        navigate(item.href || '');
                        window.scrollTo(0, 0);
                      } else {
                        window.location.href = item.href || '';
                      }
                      setIsOpen(false);
                    }}
                    className="text-slate-600 font-medium py-3 px-3 rounded-xl hover:bg-accent transition-colors text-left focus:outline-none"
                  >
                    {item.name}
                  </button>
                ) : (
                  <div key={item.name}>
                    <button
                      className="w-full flex items-center justify-between text-slate-700 font-semibold py-3 px-3 rounded-xl hover:bg-accent transition-colors focus:outline-none"
                      onClick={() => setMobileOpen(mobileOpen === item.name ? null : item.name)}
                    >
                      {item.name}
                      <ChevronRight size={16} className={`transition-transform duration-200 ${mobileOpen === item.name ? 'rotate-90' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {mobileOpen === item.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden pl-4"
                        >
                          {item.children.map((child) => (
                            <a
                              key={child.name}
                              href={child.isRoute ? undefined : child.href}
                              target={child.isExternal ? "_blank" : undefined}
                              rel={child.isExternal ? "noopener noreferrer" : undefined}
                              onClick={child.isRoute
                                ? (e) => { e.preventDefault(); navigate(child.href || ''); setIsOpen(false); }
                                : () => setIsOpen(false)}
                              className="block text-slate-500 text-sm py-2.5 px-3 rounded-xl hover:bg-accent hover:text-primary transition-colors cursor-pointer"
                            >
                              {child.name}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              )}
              <button
                onClick={() => { navigate('/contacto'); setIsOpen(false); }}
                className="btn-primary w-full mt-3 focus:outline-none"
              >
                Contacto
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default BarraNavegacion;
