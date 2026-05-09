import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, User, GraduationCap } from 'lucide-react';
import { fetchWP } from './services/api';

interface WordPressCapacitacion {
    id: number;
    title: { rendered: string };
    content: { rendered: string };
    date: string;
    _embedded?: {
        'wp:featuredmedia'?: Array<{ source_url: string }>;
        'author'?: Array<{ name: string }>;
    };
}

const CapacitacionDetallePage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [capacitacion, setCapacitacion] = useState<WordPressCapacitacion | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (!id) return;

        fetchWP(`capacitaciones/${id}`, { _embed: '1' })
            .then(data => {
                setCapacitacion(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError(err.message);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-white flex flex-col pt-32">
                <div className="max-w-4xl mx-auto px-6 space-y-8 w-full">
                    <div className="h-4 w-20 skeleton rounded-full opacity-20" />
                    <div className="h-16 w-3/4 skeleton rounded-2xl opacity-20" />
                    <div className="flex gap-6">
                        <div className="h-4 w-32 skeleton rounded-full opacity-20" />
                    </div>
                </div>
                <div className="max-w-4xl mx-auto px-6 w-full mt-12">
                    <div className="h-[400px] w-full skeleton rounded-3xl border-8 border-white shadow-2xl" />
                    <div className="py-20 space-y-6">
                        <div className="h-4 w-full skeleton rounded-full" />
                        <div className="h-4 w-full skeleton rounded-full" />
                        <div className="h-4 w-4/5 skeleton rounded-full" />
                        <p className="text-slate-500 font-medium font-serif text-center mt-4">Cargando detalles del curso...</p>
                    </div>
                </div>
            </div>
        );
    }

    if (error || !capacitacion) {
        return (
            <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
                <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100 text-center max-w-lg">
                    <h2 className="text-3xl font-serif font-bold text-slate-800 mb-4">¡Ups!</h2>
                    <p className="text-slate-600 mb-8">{error || "No pudimos encontrar la capacitación que buscabas."}</p>
                    <button 
                        onClick={() => navigate('/capacitaciones')}
                        className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary/90 transition-all font-serif"
                    >
                        Ver todas las capacitaciones
                    </button>
                </div>
            </div>
        );
    }

    const featuredImage = capacitacion._embedded?.['wp:featuredmedia']?.[0]?.source_url;
    const authorName = capacitacion._embedded?.['author']?.[0]?.name || "Escuela de Gobierno - Río Paraná";

    return (
        <div className="min-h-screen selection:bg-primary/20 selection:text-primary bg-white">
            {/* Header / Hero */}
            <header className="relative pt-32 pb-20 bg-navy overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img loading="lazy" decoding="async" 
                        src={featuredImage || "/placeholder.jpg"} 
                        alt="" 
                        className="w-full h-full object-cover blur-sm scale-105"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-transparent" />
                
                <div className="relative z-10 max-w-4xl mx-auto px-6">
                    <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        onClick={() => navigate('/capacitaciones')}
                        className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors mb-12 font-bold tracking-wider uppercase text-xs"
                    >
                        <ArrowLeft size={16} />
                        Volver a Capacitaciones
                    </motion.button>

                    <div className="flex items-center gap-3 text-blue-300 font-bold uppercase tracking-widest text-xs mb-6">
                        <GraduationCap size={18} />
                        <span>Capacitación</span>
                    </div>

                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl text-white font-serif font-bold leading-tight mb-8"
                    >
                        {capacitacion.title.rendered}
                    </motion.h1>

                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap gap-6 text-blue-100 text-sm border-t border-white/10 pt-8"
                    >
                        <div className="flex items-center gap-2">
                            <User size={16} className="text-blue-300" />
                            <span>{authorName}</span>
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* Main Content */}
            <main className="py-20 px-6 font-serif">
                <article className="max-w-4xl mx-auto">
                    {featuredImage && (
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="rounded-3xl overflow-hidden shadow-2xl mb-16 -mt-32 relative z-20 border-8 border-white"
                        >
                            <img loading="lazy" decoding="async" 
                                src={featuredImage} 
                                alt={capacitacion.title.rendered}
                                className="w-full h-auto object-cover max-h-[500px]"
                            />
                        </motion.div>
                    )}

                    <div 
                        className="prose prose-lg max-w-none prose-slate prose-headings:font-serif prose-headings:font-bold prose-p:leading-relaxed prose-img:rounded-3xl prose-img:shadow-lg prose-a:text-primary"
                        dangerouslySetInnerHTML={{ __html: capacitacion.content.rendered }}
                    />
                </article>
            </main>

            <section className="bg-slate-50 py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-serif font-bold text-slate-800 mb-6 font-serif">¿Querés inscribirte o más información?</h2>
                    <p className="text-slate-600 mb-8 max-w-xl mx-auto font-serif">
                        Nuestros cupos son limitados para garantizar la calidad pedagógica. Contactanos para reservar tu lugar o recibir el programa completo.
                    </p>
                    <button 
                        onClick={() => window.open('https://wa.me/5493424050015', '_blank')}
                        className="bg-primary text-white px-10 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 font-serif flex items-center justify-center gap-2 mx-auto"
                    >
                        Contactar por WhatsApp
                    </button>
                </div>
            </section>
        </div>
    );
};

export default CapacitacionDetallePage;
