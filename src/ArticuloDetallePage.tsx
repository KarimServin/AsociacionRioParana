import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { fetchWP } from './services/api';

interface WordPressPost {
    id: number;
    title: { rendered: string };
    content: { rendered: string };
    date: string;
    _embedded?: {
        'wp:featuredmedia'?: Array<{ source_url: string }>;
        'author'?: Array<{ name: string }>;
    };
}

const ArticuloDetallePage: React.FC = () => {
    const { categoria, id } = useParams<{ categoria: string, id: string }>();
    const navigate = useNavigate();
    const [post, setPost] = useState<WordPressPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (!id || !categoria) return;

        const endpoint = categoria.toLowerCase() === 'informes' 
            ? 'informes' 
            : (categoria.toLowerCase() === 'publicaciones' ? 'publicaciones' : 'posts');

        fetchWP(`${endpoint}/${id}`, { _embed: '1' })
            .then(data => {
                setPost(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError(err.message);
                setLoading(false);
            });
    }, [id, categoria]);

    if (loading) {
        return (
            <div className="min-h-screen bg-white flex flex-col pt-32">
                <div className="max-w-4xl mx-auto px-6 space-y-8 w-full">
                    <div className="h-4 w-20 skeleton rounded-full opacity-20" />
                    <div className="h-16 w-3/4 skeleton rounded-2xl opacity-20" />
                    <div className="flex gap-6">
                        <div className="h-4 w-32 skeleton rounded-full opacity-20" />
                        <div className="h-4 w-32 skeleton rounded-full opacity-20" />
                    </div>
                </div>
                <div className="max-w-4xl mx-auto px-6 w-full mt-12">
                    <div className="h-[400px] w-full skeleton rounded-3xl border-8 border-white shadow-2xl" />
                    <div className="py-20 space-y-6">
                        <div className="h-4 w-full skeleton rounded-full" />
                        <div className="h-4 w-full skeleton rounded-full" />
                        <div className="h-4 w-4/5 skeleton rounded-full" />
                        <div className="h-4 w-full skeleton rounded-full" />
                    </div>
                </div>
            </div>
        );
    }

    if (error || !post) {
        return (
            <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
                <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100 text-center max-w-lg">
                    <h2 className="text-3xl font-serif font-bold text-slate-800 mb-4">No encontrado</h2>
                    <p className="text-slate-600 mb-8">{error || "Lo sentimos, no pudimos encontrar lo que buscabas."}</p>
                    <button 
                        onClick={() => navigate(-1)}
                        className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary/90 transition-all"
                    >
                        Volver atrás
                    </button>
                </div>
            </div>
        );
    }

    const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
    const authorName = post._embedded?.['author']?.[0]?.name || "Asociación Civil Río Paraná";
    const formattedDate = new Date(post.date).toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    return (
        <div className="min-h-screen selection:bg-primary/20 selection:text-primary bg-white">

            {/* Header / Hero */}
            <header className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img loading="lazy" decoding="async" 
                        src={featuredImage || "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80"} 
                        alt="" 
                        className="w-full h-full object-cover blur-sm scale-105"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
                
                <div className="relative z-10 max-w-4xl mx-auto px-6">
                    <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-primary hover:text-white transition-colors mb-12 font-bold tracking-wider uppercase text-xs"
                    >
                        <ArrowLeft size={16} />
                        Volver
                    </motion.button>

                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl text-white font-serif font-bold leading-tight mb-8"
                    >
                        {post.title.rendered}
                    </motion.h1>

                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap gap-6 text-slate-400 text-sm border-t border-white/10 pt-8"
                    >
                        <div className="flex items-center gap-2">
                            <Calendar size={16} className="text-primary" />
                            <span>{formattedDate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <User size={16} className="text-primary" />
                            <span>{authorName}</span>
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* Main Content */}
            <main className="py-20 px-6">
                <article className="max-w-4xl mx-auto">
                    {featuredImage && (
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="rounded-3xl overflow-hidden shadow-2xl mb-16 -mt-32 relative z-20 border-8 border-white"
                        >
                            <img loading="lazy" decoding="async" 
                                src={featuredImage} 
                                alt={post.title.rendered}
                                className="w-full h-auto object-cover max-h-[500px]"
                            />
                        </motion.div>
                    )}

                    <div 
                        className="prose prose-lg max-w-none prose-slate prose-headings:font-serif prose-headings:font-bold prose-p:leading-relaxed prose-img:rounded-3xl prose-img:shadow-lg prose-a:text-primary"
                        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                    />
                </article>
            </main>
        </div>
    );
};

export default ArticuloDetallePage;
