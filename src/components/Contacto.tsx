import React from 'react';
import { MapPin, Mail, Instagram, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

const Contacto = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <section id="contacto" className="section-spacing relative bg-slate-50 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-primary font-serif font-bold">Contáctanos</h2>
          <p className="text-slate-600 mb-16 text-lg max-w-2xl mx-auto font-serif">
            Estamos aquí para escucharte. Ya sea para colaborar, sumarte como voluntario o realizar una consulta.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto"
        >
          {/* Location Card */}
          <motion.div variants={itemVariants} className="bg-white/60 backdrop-blur-xl rounded-[2.5rem] p-10 shadow-xl shadow-slate-200/50 border border-white flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-500">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-primary/30 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
              <MapPin className="text-white" size={36} />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-800 tracking-wider uppercase text-sm">Ubicación</h3>
              <p className="text-slate-600 leading-relaxed font-serif text-lg">
                Santa Fe, <br />Provincia de Santa Fe, <br />Argentina
              </p>
            </div>
          </motion.div>

          {/* WhatsApp Card */}
          <motion.a 
            variants={itemVariants}
            href="https://wa.me/5493424050015" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white/60 backdrop-blur-xl rounded-[2.5rem] p-10 shadow-xl shadow-slate-200/50 border border-white flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-500"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-green-500/30 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
              <svg viewBox="0 0 24 24" className="w-10 h-10 fill-white" aria-hidden="true">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.512-2.961-2.628-.086-.117-.705-.938-.705-1.792 0-.853.447-1.273.605-1.446.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.101-.177.211-.077.382.1.171.444.731.954 1.185.656.584 1.21.765 1.382.852.173.087.274.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.144.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202s.13.565-.015.971zM12 2C6.477 2 2 6.477 2 12c0 1.891.526 3.66 1.438 5.17L2 22l5.008-1.313C8.428 21.503 10.142 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.719 0-3.325-.487-4.69-1.332l-.337-.21-2.434.637.661-2.413-.23-.368C4.129 15.01 3.6 13.56 3.6 12c0-4.632 3.768-8.4 8.4-8.4s8.4 3.768 8.4 8.4-3.768 8.4-8.4 8.4z"></path>
              </svg>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-800 tracking-wider uppercase text-sm">Whatsapp</h3>
              <div className="text-slate-600 text-lg font-serif">
                <p>+54 9 342 405-0015</p>
              </div>
            </div>
          </motion.a>

          {/* Email Card */}
          <motion.div variants={itemVariants} className="bg-white/60 backdrop-blur-xl rounded-[2.5rem] p-10 shadow-xl shadow-slate-200/50 border border-white flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-500">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-primary/30 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
              <Mail className="text-white" size={36} />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-800 tracking-wider uppercase text-sm">Email</h3>
              <a 
                href="mailto:info@rioparana.org.ar" 
                className="text-slate-600 hover:text-primary transition-colors font-serif text-lg block"
              >
                info@rioparana.org.ar
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Social Media Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-24 text-center"
        >
          <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.4em] mb-10">Síguenos en nuestras redes</p>
          <div className="flex justify-center gap-6 md:gap-8">
            <a 
              href="https://www.instagram.com/rioparana.stafe/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-16 h-16 bg-white/40 backdrop-blur-md rounded-2xl flex items-center justify-center text-slate-600 hover:bg-gradient-to-tr hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 hover:text-white hover:scale-110 hover:shadow-lg transition-all duration-300 group border border-white/60"
              title="Instagram"
              aria-label="Instagram"
            >
              <Instagram size={28} className="transition-transform group-hover:scale-110" />
            </a>
            <a 
              href="https://www.facebook.com/asociacioncivilrioparana" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-16 h-16 bg-white/40 backdrop-blur-md rounded-2xl flex items-center justify-center text-slate-600 hover:bg-[#1877F2] hover:text-white hover:scale-110 hover:shadow-lg transition-all duration-300 group border border-white/60"
              title="Facebook"
              aria-label="Facebook"
            >
              <Facebook size={28} className="transition-transform group-hover:scale-110" />
            </a>
            <a 
              href="https://x.com/rioparanastafe" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-16 h-16 bg-white/40 backdrop-blur-md rounded-2xl flex items-center justify-center text-slate-600 hover:bg-black hover:text-white hover:scale-110 hover:shadow-lg transition-all duration-300 group border border-white/60"
              title="X"
              aria-label="X"
            >
              <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current transition-transform group-hover:scale-110" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contacto;
