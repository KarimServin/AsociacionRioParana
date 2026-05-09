import React, { useEffect } from 'react';
import SeccionSuma from './components/SeccionSuma';

const NosAcompananPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen selection:bg-primary/20 selection:text-primary bg-slate-50">
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
                        <h1 className="text-5xl md:text-6xl text-white font-serif font-bold leading-tight">Nos acompañan</h1>
                    </motion.div>
                </div>
            </section>

            <section className="section-spacing max-w-7xl mx-auto">
                <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 italic text-slate-500 font-serif">
                    Próximamente estaremos publicando las organizaciones que nos acompañan en nuestro camino.
                </div>
            </section>

            {/* CTA Section */}
            <SeccionSuma 
                titulo="Sumá tu empresa"
                subtitulo="Buscamos alianzas con organizaciones que compartan nuestra visión de desarrollo y transparencia."
                textoBoton="Colaborar como empresa"
            />
        </div>
    );
};

export default NosAcompananPage;
