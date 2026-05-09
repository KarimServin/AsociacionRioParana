import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { fetchWP } from '../services/api';

interface ArticulosProps {
  categoria?: string;
  isPage?: boolean;
}

interface WPPost {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  _embedded?: {
    'wp:featuredmedia'?: Array<{ 
      source_url: string;
      media_details?: {
        sizes?: {
          thumbnail?: { source_url: string };
          medium?: { source_url: string };
          large?: { source_url: string };
        }
      }
    }>;
  };
  type: string;
}

const Articulos = ({ categoria, isPage = false }: ArticulosProps) => {
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const endpoint = categoria?.toLowerCase() === 'informes' 
    ? 'informes' 
    : (categoria?.toLowerCase() === 'posts' ? 'posts' : 'publicaciones');
      
    fetchWP(endpoint, { _embed: '1', per_page: isPage ? '9' : '3' })
      .then(data => {
        if (Array.isArray(data)) {
          setPosts(data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [categoria, isPage]);

  const getTitle = () => {
    if (!categoria) return "Artículos y Prensa";
    switch(categoria.toLowerCase()) {
      case 'publicaciones': return "Publicaciones";
      case 'informes': return "Informes Institucionales";
      case 'noticias': return "Noticias";
      case 'notas': return "Notas de Opinión";
      default: return "Artículos";
    }
  };

  const SkeletonCard = () => (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col h-full">
      <div className="h-64 skeleton" />
      <div className="p-8 space-y-4">
        <div className="h-3 w-24 skeleton rounded-full" />
        <div className="h-6 w-full skeleton rounded-lg" />
        <div className="space-y-2">
          <div className="h-3 w-full skeleton rounded-full" />
          <div className="h-3 w-5/6 skeleton rounded-full" />
          <div className="h-3 w-4/6 skeleton rounded-full" />
        </div>
      </div>
    </div>
  );

  return (
    <>
      {isPage && (
        <section className="relative pt-36 pb-10 overflow-hidden bg-navy">
          <div className="absolute inset-0 bg-linear-to-br from-navy via-navy to-slate-900 opacity-95" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-blue-100 text-[10px] font-bold uppercase tracking-widest mb-3">
                Blog
              </span>
              <h1 className="text-5xl md:text-6xl text-white font-serif font-bold leading-tight mb-4">{getTitle()}</h1>
            </motion.div>
          </div>
        </section>
      )}

      <section id="articulos" className={`section-spacing ${isPage ? 'bg-slate-50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          {!isPage && (
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-4xl text-primary mb-4 font-serif font-bold">{getTitle()}</h2>
                <p className="text-slate-600 max-w-2xl text-lg">
                  Explora nuestros últimos contenidos sobre la realidad institucional y social de nuestra región.
                </p>
              </div>
              <button 
                onClick={() => navigate('/articulos/publicaciones')}
                className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
              >
                Ver todo <ChevronRight size={20} />
              </button>
            </div>
          )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {loading ? (
            Array(3).fill(0).map((_, i) => <SkeletonCard key={i} />)
          ) : posts.length > 0 ? (
            posts.map((item, index) => {
              const imageSizes = item._embedded?.['wp:featuredmedia']?.[0]?.media_details?.sizes;
              const imageUrl = imageSizes?.medium?.source_url || 
                imageSizes?.thumbnail?.source_url ||
                item._embedded?.['wp:featuredmedia']?.[0]?.source_url || 
                "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80";

              const formattedDate = new Date(item.date).toLocaleDateString('es-ES', {
                day: 'numeric',
                month: 'short',
                year: 'numeric'
              });

              const badgeText = categoria?.toLowerCase() === 'informes' ? 'Informe' : 
                (categoria?.toLowerCase() === 'publicaciones' ? 'Publicaciones' : getTitle());

              return (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col h-full cursor-pointer"
                  onClick={() => navigate(`/articulos/${item.type || categoria || 'posts'}/${item.id}`)}
                >
                  <div className="relative h-64 overflow-hidden bg-slate-100">
                    <img 
                      src={imageUrl} 
                      alt={item.title.rendered}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      width="400"
                      height="250"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-1.5 bg-white/95 backdrop-blur-md text-primary text-[10px] font-bold rounded-full shadow-sm uppercase tracking-wider">
                        {badgeText}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">{formattedDate}</span>
                    <h3 className="text-xl font-bold text-slate-800 group-hover:text-primary transition-colors leading-tight mb-4 font-serif line-clamp-2">
                      {item.title.rendered}
                    </h3>
                    <div 
                      className="text-slate-600 line-clamp-3 text-sm leading-relaxed mb-6 flex-grow"
                      dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}
                    />
                    <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider group/btn">
                      Leer más <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-2" />
                    </div>
                  </div>
                </motion.article>
              );
            })
          ) : (
            <div className="col-span-full py-20 text-center">
              <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <ArrowRight className="text-primary/30 rotate-45" size={40} />
              </div>
              <p className="text-slate-500 text-lg font-serif">Aún no se han cargado {getTitle().toLowerCase()} en este sitio.</p>
            </div>
          )}
        </div>
      </div>
      </section>
    </>
  );
};


export default Articulos;
