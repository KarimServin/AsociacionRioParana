import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { fetchWP } from '../services/api';

const Portada = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/slides.json')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.text();
      })
      .then(async (text) => {
        try {
          // Limpieza de comas finales antes del cierre de array/objeto
          const cleanJson = text.replace(/,(\s*[\]}])/g, '$1');
          const data = JSON.parse(cleanJson);

          const hydratedSlides = await Promise.all(data.map(async (slide: any) => {
            if (!slide.image && slide.link) {
              try {
                let wpId = slide.wp_id;
                let wpType = slide.wp_type;

                // Parsing del link extremadamente robusto
                const link = slide.link;
                let cleanPath = "";

                if (link.startsWith('http')) {
                  try {
                    const url = new URL(link);
                    // Si tiene hash (ej: #/articulos/informes/28), lo usamos
                    cleanPath = url.hash ? url.hash.replace('#', '') : url.pathname;
                  } catch (e) {
                    // Fallback si URL falla
                    cleanPath = link.split('#')[1] || link.split('/').slice(3).join('/');
                  }
                } else {
                  // Link relativo (ej: articulos/informes/28 o /articulos/...)
                  cleanPath = link.includes('#') ? link.split('#')[1] : link;
                }

                cleanPath = cleanPath.replace(/^\/+/, '').replace(/\/$/, '');
                const parts = cleanPath.split('/').filter(Boolean);
                
                const isWP = parts.includes('iniciativas') || parts.includes('capacitaciones') || parts.includes('articulos') || parts.includes('posts');

                if (!wpId && isWP) {
                  if (parts.includes('iniciativas')) {
                    wpType = 'iniciativas';
                    wpId = parts[parts.indexOf('iniciativas') + 1];
                  } else if (parts.includes('capacitaciones')) {
                    wpType = 'capacitaciones';
                    wpId = parts[parts.indexOf('capacitaciones') + 1];
                  } else if (parts.includes('articulos')) {
                    if (parts.includes('informes')) {
                      wpType = 'informes';
                    } else if (parts.includes('publicaciones')) {
                      wpType = 'publicaciones';
                    } else {
                      wpType = 'posts';
                    }
                    wpId = parts[parts.length - 1];
                  } else if (parts.includes('posts')) {
                    wpType = 'posts';
                    wpId = parts[parts.length - 1];
                  }
                }

                if (wpId && wpType) {
                  const wpData = await fetchWP(`${wpType}/${wpId}`, { _embed: '1' });
                  const wpImage = wpData._embedded?.['wp:featuredmedia']?.[0]?.source_url;
                  
                  return {
                    ...slide,
                    image: slide.image || wpImage || "/placeholder.jpg",
                    title: slide.title || wpData.title?.rendered,
                    desc: slide.desc || wpData.excerpt?.rendered?.replace(/<[^>]*>/g, '').substring(0, 160) + '...',
                    date: slide.date || new Date(wpData.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }),
                  };
                }
              } catch (err) {
                console.warn(`[Slider] Sincronización WP fallida para ${slide.link}:`, err);
              }
            }
            return slide;
          }));

          setSlides(hydratedSlides.filter(s => s && (s.image || s.title)));
          setLoading(false);
        } catch (parseErr) {
          console.error("Error parseando slides.json:", parseErr);
          setLoading(false);
        }
      })
      .catch(err => {
        console.error("Error crítico cargando slides.json:", err);
        setLoading(false);
      });
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  if (loading || slides.length === 0) return (
    <div className="h-screen bg-slate-900 flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
    </div>
  );

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
        </motion.div>
      </AnimatePresence>
      
      {slides.length > 1 && (
        <link rel="preload" as="image" href={slides[(currentSlide + 1) % slides.length].image} />
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl text-white mb-6 leading-tight font-serif font-bold">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl text-slate-300 mb-4 leading-relaxed max-w-2xl">
              {slides[currentSlide].desc}
            </p>
            {slides[currentSlide].date && (
              <p className="flex items-center gap-2 text-sm text-blue-300/80 mb-10 font-medium tracking-wide">
                <Calendar size={14} />
                {slides[currentSlide].date}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate(slides[currentSlide].link)}
                className="btn-primary text-lg px-8 py-4 flex items-center justify-center gap-2 group"
              >
                Ver artículo <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {slides.length > 1 && (
        <>
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-20 px-4 md:px-10 flex justify-between pointer-events-none">
            <button
              onClick={prevSlide}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 hover:bg-white/20 text-white backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all pointer-events-auto active:scale-90"
              aria-label="Diapositiva anterior"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 hover:bg-white/20 text-white backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all pointer-events-auto active:scale-90"
              aria-label="Siguiente diapositiva"
            >
              <ChevronRight size={32} />
            </button>
          </div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-4">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all cursor-pointer ${currentSlide === idx ? 'bg-primary w-8' : 'bg-white/30 hover:bg-white/50'
                  }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Portada;
