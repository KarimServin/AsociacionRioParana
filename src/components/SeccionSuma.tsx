import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SeccionSumaProps {
    titulo?: string;
    subtitulo?: string;
    textoBoton?: string;
}

const SeccionSuma: React.FC<SeccionSumaProps> = ({ 
    titulo = "¿Querés sumarte?", 
    subtitulo = "Sumate a nuestro equipo de voluntarios y ayudanos a construir el futuro de nuestra región.",
    textoBoton = "Contactar ahora"
}) => {
    const navigate = useNavigate();

    return (
        <section className="section-spacing relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="relative bg-navy rounded-[3rem] p-12 md:p-24 text-center overflow-hidden shadow-2xl shadow-navy/20"
                >
                    {/* Animated background patterns */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full -mr-64 -mt-64 blur-[120px] animate-pulse" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full -ml-64 -mb-64 blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
                    
                    <div className="relative z-10 flex flex-col items-center">
                        <div className="mb-8 p-3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                            <Sparkles className="text-blue-300" size={24} />
                        </div>
                        
                        <h2 className="text-4xl md:text-6xl text-white font-serif font-bold mb-8 leading-tight">
                            {titulo}
                        </h2>
                        
                        <p className="text-blue-100/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-serif">
                            {subtitulo}
                        </p>
                        
                        <motion.button 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => window.open('https://wa.me/5493424050015', '_blank')}
                            className="group relative bg-white text-navy px-12 py-5 rounded-2xl font-bold text-lg inline-flex items-center gap-3 transition-all shadow-xl shadow-black/20 overflow-hidden"
                        >
                            <span className="relative z-10">{textoBoton}</span>
                            <ArrowRight className="relative z-10 group-hover:translate-x-1.5 transition-transform" />
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SeccionSuma;
