import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import IniciativaCard from './components/IniciativaCard';
import { fetchWP } from './services/api';
import SeccionSuma from './components/SeccionSuma';

interface WordPressIniciativa {
    id: number;
    title: { rendered: string };
    excerpt: { rendered: string };
    content: { rendered: string };
    _embedded?: {
        'wp:featuredmedia'?: Array<{ source_url: string }>;
    };
}

const IniciativasPage: React.FC = () => {
    const [iniciativas, setIniciativas] = useState<WordPressIniciativa[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchWP('iniciativas', { _embed: '1' })
            .then(data => {
                setIniciativas(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError(err.message);
                setLoading(false);
            });
    }, []);

    const SkeletonGrid = () => (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col h-full">
                    <div className="h-56 skeleton" />
                    <div className="p-8 space-y-4">
                        <div className="h-6 w-3/4 skeleton rounded-lg" />
                        <div className="space-y-2">
                            <div className="h-3 w-full skeleton rounded-full" />
                            <div className="h-3 w-5/6 skeleton rounded-full" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div className="min-h-screen bg-white">
            <header className="relative pt-36 pb-10 overflow-hidden bg-navy">
                <div className="absolute inset-0 bg-linear-to-br from-navy via-navy to-slate-900 opacity-95" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl" />
                
                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-blue-100 text-[10px] font-bold uppercase tracking-widest mb-3">
                            Qué hacemos
                        </span>
                        <h1 className="text-5xl md:text-6xl text-white font-serif font-bold leading-tight">Iniciativas</h1>
                    </motion.div>
                </div>
            </header>

            {/* Content Section */}
            <section className="section-spacing max-w-7xl mx-auto">
                {loading ? (
                    <SkeletonGrid />
                ) : error ? (
                    <div className="text-center py-20 bg-red-50 rounded-3xl border border-red-100 italic text-red-600">
                        {error}
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {iniciativas.map((iniciativa) => (
                            <IniciativaCard
                                key={iniciativa.id}
                                id={iniciativa.id}
                                title={iniciativa.title.rendered}
                                excerpt={iniciativa.excerpt.rendered}
                                imageUrl={iniciativa._embedded?.['wp:featuredmedia']?.[0]?.source_url || ""}
                            />
                        ))}
                    </div>
                )}
            </section>

            <SeccionSuma 
                titulo="¿Querés sumarte?"
                subtitulo="Sumate a nuestro equipo de voluntarios y ayudanos a construir el futuro de nuestra región."
                textoBoton="Contactar ahora"
            />
        </div>
    );
};

export default IniciativasPage;
