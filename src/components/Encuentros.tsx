import React from 'react';
import { Video, Users, Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const Encuentros = () => {
  const activities = [
    {
      title: "Encuentros Virtuales",
      desc: "Conectamos a través de plataformas digitales para debates y asambleas participativas con alcance federal.",
      icon: <Video className="w-6 h-6" />,
      color: "bg-blue-50 text-primary",
      delay: 0.1
    },
    {
      title: "Conferencias Presenciales",
      desc: "Eventos exclusivos y reuniones con referentes nacionales e internacionales en puntos clave de la región.",
      icon: <Users className="w-6 h-6" />,
      color: "bg-slate-100 text-navy",
      delay: 0.2
    },
    {
      title: "Reuniones de Trabajo",
      desc: "Mesas ejecutivas para la coordinación de proyectos, análisis de datos y planificación operativa.",
      icon: <Calendar className="w-6 h-6" />,
      color: "bg-primary/5 text-primary",
      delay: 0.3
    }
  ];

  return (
    <section className="section-spacing bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -skew-x-12 translate-x-1/4 z-0" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Nuestra dinámica</span>
            <h2 className="text-4xl md:text-5xl text-navy mb-8 font-serif leading-tight">Espacios de Encuentro y Diálogo</h2>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              Fomentamos el intercambio de ideas y la participación activa a través de diversas modalidades de reunión, impulsando una cultura de trabajo basada en la libertad y la transparencia.
            </p>
            
            <div className="space-y-4">
              {activities.map((act, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: act.delay }}
                  viewport={{ once: true }}
                  className="flex gap-6 p-8 rounded-[2rem] bg-white border border-slate-100 hover:border-primary/20 transition-all duration-500 soft-shadow group cursor-default"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110 ${act.color}`}>
                    {act.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-slate-800">{act.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{act.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-12 gap-6 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="col-span-7"
            >
              <img 
                src="/fotos/Otros/Con-Fausto.jpeg" 
                alt="Reunión con referentes económicos en el Congreso de la Asociación"
                className="rounded-[3rem] shadow-2xl w-full aspect-[4/5] object-cover" 
                width="600"
                height="800"
                referrerPolicy="no-referrer" 
                loading="lazy" 
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="col-span-5 space-y-6"
            >
              <img 
                src="/fotos/Otros/ElonM.jpeg" 
                alt="Participación de la Asociación en foros de debate internacional"
                className="rounded-[2.5rem] shadow-xl w-full aspect-square object-cover object-right" 
                width="600"
                height="800"
                referrerPolicy="no-referrer" 
                loading="lazy" 
              />
              <div className="p-6 md:p-8 bg-primary rounded-[2.5rem] text-white shadow-xl relative overflow-hidden group flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-transform duration-1000" />
                <p className="text-xs font-bold uppercase tracking-widest mb-3 text-blue-200">Nuestra Visión</p>
                <p className="text-lg font-serif leading-tight">
                  Construimos puentes y espacios de diálogo para transformar la realidad de nuestra región.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Encuentros;
