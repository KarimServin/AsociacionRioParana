/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Users, 
  BookOpen, 
  Briefcase, 
  GraduationCap, 
  Heart, 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Facebook, 
  Twitter,
  ArrowRight,
  Target,
  Shield,
  Award,
  Video,
  Calendar,
  Newspaper,
  Globe,
  Mic2,
  ChevronLeft,
  Search,
  FileText,
  PieChart,
  Scale
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Investigación', href: '#investigacion' },
    { name: 'Publicaciones', href: '#publicaciones' },
    { name: 'Políticas Públicas', href: '#politicas' },
    { name: 'Institucional', href: '#institucional' },
    { name: 'Noticias', href: '#noticias' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${scrolled ? 'bg-primary' : 'bg-white'}`}>
            <span className={`font-bold text-xl ${scrolled ? 'text-white' : 'text-primary'}`}>RP</span>
          </div>
          <span className={`font-serif font-bold text-xl hidden sm:block ${scrolled ? 'text-primary' : 'text-white'}`}>
            Río Paraná
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`font-medium transition-colors ${scrolled ? 'text-slate-600 hover:text-primary' : 'text-white/90 hover:text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <button className="btn-primary">Colabora</button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={scrolled ? 'text-slate-800' : 'text-white'} />
          ) : (
            <Menu className={scrolled ? 'text-slate-800' : 'text-white'} />
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
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-slate-600 font-medium py-2 border-b border-slate-50"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="btn-primary w-full mt-2">Colabora</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "https://picsum.photos/seed/thinktank1/1920/1080",
      category: "Análisis Estratégico",
      title: "Pensamiento crítico para la acción política",
      desc: "Somos un centro de investigación dedicado al análisis de políticas públicas y la generación de propuestas estratégicas para el desarrollo regional."
    },
    {
      image: "https://picsum.photos/seed/thinktank2/1920/1080",
      category: "Incidencia Pública",
      title: "Transformando ideas en políticas de Estado",
      desc: "Promovemos el debate plural y la construcción de consensos para fortalecer la calidad democrática y el crecimiento institucional."
    },
    {
      image: "https://picsum.photos/seed/thinktank3/1920/1080",
      category: "Investigación Aplicada",
      title: "Datos rigurosos para decisiones inteligentes",
      desc: "Nuestros observatorios proporcionan evidencia técnica para el diseño de soluciones innovadoras a los desafíos complejos de la actualidad."
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={slides[currentSlide].image} 
            alt="Think Tank Río Paraná" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 w-full">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlide}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/30 text-blue-200 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md border border-blue-400/20">
              {slides[currentSlide].category}
            </span>
            <h1 className="text-5xl md:text-7xl text-white mb-6 leading-tight font-serif font-bold">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              {slides[currentSlide].desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary text-lg px-8 py-4 flex items-center justify-center gap-2 group">
                Líneas de Investigación <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/5 hover:bg-white/10 text-white backdrop-blur-md px-8 py-4 rounded-full font-semibold transition-all border border-white/20 flex items-center justify-center gap-2">
                Nuestras Publicaciones
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-20 px-4 md:px-10 flex justify-between pointer-events-none">
        <button 
          onClick={prevSlide}
          className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 hover:bg-white/20 text-white backdrop-blur-md border border-white/10 flex items-center justify-center transition-all pointer-events-auto active:scale-90"
          aria-label="Anterior"
        >
          <ChevronLeft size={32} />
        </button>
        <button 
          onClick={nextSlide}
          className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 hover:bg-white/20 text-white backdrop-blur-md border border-white/10 flex items-center justify-center transition-all pointer-events-auto active:scale-90"
          aria-label="Siguiente"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-4">
        {slides.map((_, i) => (
          <button 
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${currentSlide === i ? 'w-12 bg-primary' : 'w-4 bg-white/20'}`}
          />
        ))}
      </div>
    </section>
  );
};

const President = () => {
  return (
    <section className="section-padding bg-accent/30">
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
                  src="https://picsum.photos/seed/president/800/1000" 
                  alt="Presidente" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-xl">
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
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Mensaje de la Presidencia</span>
            <h2 className="text-4xl mb-6">Dr. Roberto G. Valenzuela</h2>
            <div className="w-20 h-1.5 bg-primary mb-8 rounded-full" />
            <p className="text-xl text-slate-700 italic mb-8 leading-relaxed font-serif">
              "Nuestra misión trasciende la asistencia; buscamos empoderar a cada individuo para que sea protagonista de su propio destino y del progreso de su comunidad."
            </p>
            <p className="text-slate-600 mb-10 leading-relaxed">
              Como presidente de la Asociación Civil Río Paraná, me enorgullece liderar un equipo que no teme a los desafíos. Creemos en la transparencia y en el trabajo de campo como las únicas vías para generar un cambio real y duradero en nuestra querida región.
            </p>
            <button className="btn-outline">Leer biografía completa</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Meetings = () => {
  const activities = [
    {
      title: "Encuentros Virtuales",
      desc: "Conectamos a través de plataformas digitales para debates y asambleas participativas.",
      icon: <Video className="w-8 h-8" />,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Conferencias Presenciales",
      desc: "Eventos magistrales con referentes nacionales e internacionales en nuestra sede.",
      icon: <Users className="w-8 h-8" />,
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      title: "Reuniones de Trabajo",
      desc: "Mesas redondas semanales para la coordinación de proyectos y áreas operativas.",
      icon: <Calendar className="w-8 h-8" />,
      color: "bg-cyan-50 text-cyan-600"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl text-primary mb-6">Espacios de Encuentro</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Fomentamos el diálogo y la participación activa a través de diversas modalidades de reunión. Adaptamos nuestras dinámicas para garantizar que todas las voces sean escuchadas.
            </p>
            <div className="space-y-6">
              {activities.map((act, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-2xl border border-slate-50 hover:border-slate-200 transition-all card-shadow">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center shrink-0 ${act.color}`}>
                    {act.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{act.title}</h4>
                    <p className="text-slate-500 text-sm">{act.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <img src="https://picsum.photos/seed/meet1/600/800" className="rounded-3xl shadow-lg mt-12" referrerPolicy="no-referrer" />
            <img src="https://picsum.photos/seed/meet2/600/800" className="rounded-3xl shadow-lg" referrerPolicy="no-referrer" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const About = () => {
  return (
    <section id="institucional" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl text-primary mb-6">Misión Institucional</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              La Asociación Civil Río Paraná es un **think tank** independiente dedicado al análisis riguroso de la realidad política, social y económica. Nuestra labor se centra en la generación de conocimiento técnico y propuestas innovadoras que contribuyan a la mejora de las políticas públicas y al fortalecimiento de las instituciones democráticas.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                  <Search className="text-primary" />
                </div>
                <div>
                  <h4 className="text-xl mb-2 font-bold">Investigación</h4>
                  <p className="text-slate-500 text-sm">Producción de evidencia técnica para el diseño de soluciones estratégicas.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                  <Globe className="text-primary" />
                </div>
                <div>
                  <h4 className="text-xl mb-2 font-bold">Incidencia</h4>
                  <p className="text-slate-500 text-sm">Promoción del debate público y construcción de consensos multisectoriales.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/community/800/800" 
                alt="Comunidad" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-primary text-white p-8 rounded-3xl shadow-xl hidden md:block">
              <div className="text-4xl font-bold mb-1">15+</div>
              <div className="text-sm opacity-80">Años de trayectoria <br />en la región</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Observatorio Legislativo",
      desc: "Seguimiento y análisis técnico de proyectos de ley con impacto en el desarrollo regional.",
      icon: <Scale className="w-6 h-6" />,
      image: "https://picsum.photos/seed/policy1/600/400"
    },
    {
      title: "Informes de Coyuntura",
      desc: "Análisis periódico de indicadores económicos y sociales para la toma de decisiones estratégicas.",
      icon: <PieChart className="w-6 h-6" />,
      image: "https://picsum.photos/seed/policy2/600/400"
    },
    {
      title: "Propuestas de Estado",
      desc: "Diseño de marcos regulatorios y políticas públicas orientadas a la modernización institucional.",
      icon: <FileText className="w-6 h-6" />,
      image: "https://picsum.photos/seed/policy3/600/400"
    }
  ];

  return (
    <section id="investigacion" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl text-primary mb-4">Líneas de Investigación</h2>
          <p className="text-slate-500">Generamos conocimiento aplicado para transformar la realidad institucional y social.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden card-shadow group"
            >
              <div className="h-52 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-primary mb-6">
                  {project.icon}
                </div>
                <h3 className="text-2xl mb-3">{project.title}</h3>
                <p className="text-slate-500 mb-6 leading-relaxed">{project.desc}</p>
                <a href="#" className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Saber más <ChevronRight size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Training = () => {
  return (
    <section id="politicas" className="section-padding bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl mb-6 text-white">Escuela de Gobierno</h2>
            <p className="text-lg text-blue-100 mb-10 leading-relaxed">
              Formamos a los líderes del mañana con una visión técnica, ética y estratégica. Nuestros programas están diseñados para fortalecer la gestión pública y el liderazgo civil.
            </p>
            
            <ul className="space-y-6 mb-10">
              {[
                "Diplomatura en Gestión de Políticas Públicas",
                "Seminarios de Alta Dirección Estratégica",
                "Capacitación de Cuadros Técnicos Legislativos",
                "Foros de Liderazgo y Ética Pública"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-blue-400/30 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
            
            <button className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors shadow-xl">
              Ver Calendario de Cursos
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <img src="https://picsum.photos/seed/study1/400/500" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/study2/400/300" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
            </div>
            <div className="space-y-4">
              <img src="https://picsum.photos/seed/study3/400/300" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/study4/400/500" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  const members = [
    { name: "Consejo Académico", role: "Investigadores y Expertos", icon: <Users /> },
    { name: "Área de Incidencia", role: "Relaciones Institucionales", icon: <Globe /> },
    { name: "Unidad de Datos", role: "Análisis Estadístico", icon: <PieChart /> }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-primary mb-4">Nuestra Gente</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Un equipo multidisciplinario unido por una misma pasión: el bienestar de nuestra comunidad.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {members.map((m, i) => (
            <div key={i} className="p-10 rounded-3xl border border-slate-100 text-center hover:border-primary/30 transition-colors group">
              <div className="w-20 h-20 rounded-2xl bg-blue-50 text-primary flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                {React.cloneElement(m.icon as React.ReactElement, { size: 32 })}
              </div>
              <h4 className="text-2xl mb-2">{m.name}</h4>
              <p className="text-slate-500">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contacto" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden grid lg:grid-cols-5">
          <div className="lg:col-span-2 bg-primary p-12 text-white">
            <h2 className="text-3xl mb-8 text-white">Contáctanos</h2>
            <p className="text-blue-100 mb-12">Estamos aquí para escucharte. Ya sea para colaborar, sumarte como voluntario o realizar una consulta.</p>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin className="text-blue-300 shrink-0" />
                <span>Av. Costanera 1234, <br />Ciudad de Corrientes, Argentina</span>
              </div>
              <div className="flex gap-4">
                <Phone className="text-blue-300 shrink-0" />
                <span>+54 379 400-0000</span>
              </div>
              <div className="flex gap-4">
                <Mail className="text-blue-300 shrink-0" />
                <span>contacto@rioparana.org</span>
              </div>
            </div>

            <div className="flex gap-6 mt-16">
              <a href="#" className="hover:text-blue-300 transition-colors"><Instagram /></a>
              <a href="#" className="hover:text-blue-300 transition-colors"><Facebook /></a>
              <a href="#" className="hover:text-blue-300 transition-colors"><Twitter /></a>
            </div>
          </div>

          <div className="lg:col-span-3 p-12">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Nombre Completo</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="Juan Pérez" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="juan@ejemplo.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Asunto</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
                  <option>Consulta General</option>
                  <option>Quiero ser Voluntario</option>
                  <option>Donaciones</option>
                  <option>Prensa</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Mensaje</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="¿Cómo podemos ayudarte?"></textarea>
              </div>
              <button className="btn-primary w-full py-4 text-lg">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
                <span className="font-bold text-white text-sm">RP</span>
              </div>
              <span className="font-serif font-bold text-xl text-white">Río Paraná</span>
            </div>
            <p className="text-sm leading-relaxed">
              Trabajando por el desarrollo social y comunitario de nuestra región desde hace más de 15 años.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Navegación</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Noticias</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Publicaciones</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Proyectos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Formación</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">La Asociación</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Quiénes Somos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Misión y Visión</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Equipo</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Transparencia</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-sm mb-4">Recibe nuestras últimas novedades en tu correo.</p>
            <div className="flex gap-2">
              <input type="email" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-primary" placeholder="Tu email" />
              <button className="bg-primary text-white p-2 rounded-lg hover:bg-secondary transition-colors">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Asociación Civil Río Paraná. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const News = () => {
  const newsItems = [
    {
      date: "15 Mar, 2024",
      title: "Publicación: Informe sobre Reformas Institucionales",
      desc: "Un análisis exhaustivo sobre la modernización de los procesos administrativos regionales.",
      image: "https://picsum.photos/seed/paper1/600/400"
    },
    {
      date: "10 Mar, 2024",
      title: "Foro de Debate: El Futuro de la Gestión Pública",
      desc: "Expertos de todo el país se reunieron para discutir los desafíos de la gobernanza digital.",
      image: "https://picsum.photos/seed/paper2/600/400"
    },
    {
      date: "05 Mar, 2024",
      title: "Propuesta Legislativa para el Desarrollo Sostenible",
      desc: "Presentamos un marco normativo integral para incentivar la inversión verde en la región.",
      image: "https://picsum.photos/seed/paper3/600/400"
    }
  ];

  return (
    <section id="noticias" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl text-primary mb-4">Últimas Noticias</h2>
            <p className="text-slate-500">Mantente al tanto de nuestras actividades y novedades institucionales.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
            Ver todas <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, i) => (
            <motion.article 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 rounded-3xl overflow-hidden mb-6">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-bold text-primary">
                  {item.date}
                </div>
              </div>
              <h3 className="text-2xl mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-4">{item.desc}</p>
              <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                Leer más <ChevronRight size={16} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <President />
        <Meetings />
        <Projects />
        <Training />
        <Team />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
