import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface IniciativaCardProps {
    id: number;
    title: string;
    excerpt: string;
    imageUrl: string;
    basePath?: string;
}

const IniciativaCard: React.FC<IniciativaCardProps> = ({ id, title, excerpt, imageUrl, basePath = "iniciativas" }) => {
    const navigate = useNavigate();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full"
        >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                    src={imageUrl || "/placeholder.jpg"}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-grow">
                <h3
                    className="text-2xl font-serif font-bold text-slate-800 mb-4 group-hover:text-primary transition-colors leading-tight"
                    dangerouslySetInnerHTML={{ __html: title }}
                />
                <div
                    className="text-slate-600 text-sm mb-8 line-clamp-3 leading-relaxed flex-grow"
                    dangerouslySetInnerHTML={{ __html: excerpt }}
                />

                <button
                    onClick={() => { navigate(`/${basePath}/${id}`); window.scrollTo(0, 0); }}
                    className="flex items-center gap-2 text-primary font-bold transition-all group-hover:gap-4 font-serif"
                >
                    Saber más
                    <ArrowRight size={18} />
                </button>
            </div>
        </motion.div>
    );
};

export default IniciativaCard;
