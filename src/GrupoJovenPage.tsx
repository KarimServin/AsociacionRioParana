import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SeccionSuma from './components/SeccionSuma';

const BASE = '';

const members = [
    {
        name: 'Gonzalo Vera',
        role: 'Presidente de la Juventud',
        photo: `${BASE}/fotos/Otros/GrupoJoven/Gonza.png`,
        bio: 'Estudiante en la Licenciatura en Ciencia Política, Facultad de Humanidades y Ciencias - UNL.',
    },
    {
        name: 'Mateo Orlando',
        role: 'Community Manager',
        photo: `${BASE}/fotos/Otros/GrupoJoven/MateoO.png`,
        bio: 'Becario en la Licenciatura de Artes Liberales de UCEMA.',
    },
    {
        name: 'Mateo Basilio',
        role: 'Desarrollo Institucional',
        photo: `${BASE}/fotos/Otros/GrupoJoven/MateoB.png`,
        bio: 'Alumno del ciclo secundario en el Colegio San Roque.',
    },
];

const GrupoJovenPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-36 pb-10 overflow-hidden bg-navy">
                <div className="absolute inset-0 bg-linear-to-br from-navy via-navy to-slate-900 opacity-95" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl" />
                
                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-blue-100 text-[10px] font-bold uppercase tracking-widest mb-3">
                            Institucional
                        </span>
                        <h1 className="text-5xl md:text-6xl text-white font-serif font-bold leading-tight">Grupo Joven</h1>
                    </motion.div>
                </div>
            </section>

            {/* Intro Text */}
            <section className="section-padding bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl text-primary mb-6">Juventud y Compromiso</h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            El Grupo Joven de la Asociación Civil "Río Paraná" es un espacio de formación y acción 
                            donde las nuevas generaciones se involucran activamente en la difusión de los valores 
                            republicanos y la participación ciudadana.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Team Grid */}
            <section className="section-padding bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
                        {members.map((member, idx) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200/50 group border border-slate-100 flex flex-col"
                            >
                                {/* Photo Section */}
                                <div className="relative pt-10 pb-6 flex justify-center bg-gradient-to-b from-slate-50/50 to-transparent">
                                    <div className="relative">
                                        {/* Decorative Ring */}
                                        <div className="absolute inset-0 rounded-full border-2 border-primary/10 scale-110 group-hover:scale-125 transition-transform duration-700 ease-out" />
                                        
                                        <div className="w-44 h-44 rounded-full overflow-hidden bg-slate-100 border-4 border-white shadow-2xl relative z-10">
                                            <img
                                                src={member.photo}
                                                alt={member.name}
                                                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-8 pt-2 text-center flex-grow flex flex-col">
                                    <h3 className="text-2xl font-bold text-slate-800 mb-1 group-hover:text-primary transition-colors">
                                        {member.name}
                                    </h3>
                                    <p className="text-primary font-bold text-[11px] uppercase tracking-[0.2em] mb-5">
                                        {member.role}
                                    </p>
                                    
                                    <div className="w-12 h-1 bg-primary/20 mx-auto mb-6 rounded-full overflow-hidden">
                                        <motion.div 
                                            initial={{ x: '-100%' }}
                                            whileInView={{ x: 0 }}
                                            transition={{ delay: 0.5, duration: 0.8 }}
                                            className="w-full h-full bg-primary"
                                        />
                                    </div>

                                    <p className="text-slate-500 text-[15px] leading-relaxed italic mb-4">
                                        {member.bio}
                                    </p>
                                </div>

                                {/* Bottom Accent */}
                                <div className="h-1.5 w-full bg-slate-100 mt-auto overflow-hidden">
                                    <div className="h-full w-0 group-hover:w-full bg-primary transition-all duration-700 ease-in-out" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <SeccionSuma 
                titulo="¿Querés sumarte al Grupo Joven?"
                subtitulo="Si sos estudiante y querés involucrarte en el desarrollo de nuestra región, este es tu lugar."
            />
        </div>
    );
};

export default GrupoJovenPage;
