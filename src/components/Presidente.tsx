import React from 'react';
import { Mic2 } from 'lucide-react';
import { motion } from 'motion/react';

const Presidente = () => {
  return (
    <section className="section-spacing bg-accent/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="relative">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="/fotos/presidente/Tito_Voto.webp"
                  alt="Alberto Cohan, Presidente de la Asociación Civil Río Paraná"
                  className="w-full h-full object-cover"
                  width="500"
                  height="625"
                  referrerPolicy="no-referrer" loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-white p-6 rounded-2xl shadow-xl z-20">
                <Mic2 size={24} />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Presidente de la asociación</span>
            <h2 className="text-4xl mb-6">Alberto Cohan</h2>
            <div className="w-20 h-1.5 bg-primary mb-8 rounded-full" />
            <p className="text-xl text-slate-700 italic mb-8 leading-relaxed font-serif">
              "Creemos en una región donde el que trabaja, emprende y arriesga pueda progresar. Las oportunidades se construyen cuando el esfuerzo y la libertad van de la mano."
            </p>
            <p className="text-slate-600 mb-10 leading-relaxed">
              Como presidente de la Asociación Civil Río Paraná, me enorgullece liderar un equipo comprometido con enfrentar desafíos y generar soluciones concretas para nuestra comunidad. Creemos firmemente en la transparencia, el trabajo de campo y en el potencial de la iniciativa privada como motores del desarrollo. Apostamos a construir una región más dinámica, donde el esfuerzo, la innovación y la colaboración entre la sociedad civil y el sector productivo generen oportunidades reales y sostenibles para todos.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Presidente;
