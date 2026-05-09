import React from 'react';
import { Scale, PieChart, FileText, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const Proyectos = () => {
  const projects = [
    {
      title: "Observatorio Legislativo",
      desc: "Seguimiento y análisis técnico de proyectos de ley con impacto en el desarrollo regional.",
      icon: <Scale className="w-5 h-5" />,
      image: "/fotos/ImagenesUtiles/CasaGris.webp",
      tag: "Política Pública"
    },
    {
      title: "Informes de Coyuntura",
      desc: "Análisis de indicadores económicos y sociales para la toma de decisiones estratégicas.",
      icon: <PieChart className="w-5 h-5" />,
      image: "/fotos/ImagenesUtiles/analisisEconomico.webp",
      tag: "Economía"
    },
    {
      title: "Propuestas de Estado",
      desc: "Diseño de marcos regulatorios y políticas públicas orientadas a la modernización institucional.",
      icon: <FileText className="w-5 h-5" />,
      image: "/fotos/ImagenesUtiles/Congreso2.webp",
      tag: "Instituciones"
    }
  ];

  return (
    <section id="investigacion" className="section-spacing bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Áreas de impacto</span>
            <h2 className="text-4xl md:text-5xl text-slate-900 mb-6 font-serif">Líneas de Investigación</h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Generamos conocimiento aplicado para transformar la realidad institucional y social mediante el análisis riguroso y propuestas concretas.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.21, 0.45, 0.32, 0.9] }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] overflow-hidden card-shadow group border border-slate-100/50"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={`Proyecto: ${project.title}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                  width="400"
                  height="250"
                  referrerPolicy="no-referrer" loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1.5 bg-white/95 backdrop-blur-md text-primary text-[10px] font-bold rounded-full shadow-sm uppercase tracking-wider">
                    {project.tag}
                  </span>
                </div>
              </div>
              <div className="p-10 relative">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  {project.icon}
                </div>
                <h3 className="text-2xl mb-4 text-slate-800 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-slate-500 mb-8 leading-relaxed text-sm">{project.desc}</p>
                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest group/btn cursor-pointer">
                  Saber más <ArrowRight size={14} className="group-hover/btn:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
