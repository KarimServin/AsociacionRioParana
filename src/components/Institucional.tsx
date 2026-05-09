import React from 'react';
import { Search, Globe, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

const Institucional = () => {
  return (
    <section id="institucional" className="section-spacing bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-8">
              <ShieldCheck className="text-primary" size={16} />
              <span className="text-primary font-bold text-[10px] uppercase tracking-widest">Institución Apartidaria</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl text-navy mb-8 font-serif leading-tight">Nuestra Misión y Valores</h2>

            <div className="text-lg text-slate-600 mb-12 leading-relaxed space-y-6 font-serif">
              <p>
                La <strong className="text-navy">Asociación Civil Río Paraná</strong> es una organización no gubernamental conformada por emprendedores comprometidos con la difusión de las ideas de libertad, el republicanismo y el Estado de Derecho.
              </p>
              <p>
                Nuestra labor se centra en promover la iniciativa privada y la libre empresa, revalorizando pilares fundamentales como el esfuerzo, el mérito y la transparencia para fortalecer el tejido social.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-10">
              <div className="group">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Search className="group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl mb-3 font-bold text-slate-800">Investigación</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Análisis riguroso de datos para identificar obstáculos al desarrollo regional.</p>
              </div>
              <div className="group">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Globe className="group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl mb-3 font-bold text-slate-800">Incidencia</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Traslado a la agenda pública de reformas que fortalezcan las instituciones.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 aspect-[4/5] md:aspect-square rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white soft-shadow">
              <img
                src="/fotos/ImagenesUtiles/Congreso.webp"
                alt="Referentes de la Asociación en el Congreso Regional"
                className="w-full h-full object-cover"
                width="600"
                height="600"
                referrerPolicy="no-referrer" loading="lazy"
              />
            </div>
            
            {/* Experience Floating Card */}
            <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[3rem] shadow-2xl z-20 hidden md:block border border-slate-50">
              <div className="flex items-center gap-6">
                <div className="text-6xl font-bold text-primary font-serif">12</div>
                <div className="text-sm font-bold uppercase tracking-widest text-slate-400 leading-tight">
                  Años de<br />Trayectoria
                </div>
              </div>
            </div>
            
            {/* Decorative background shape */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Institucional;
