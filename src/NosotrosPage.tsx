import React from 'react';
import { Quote } from 'lucide-react';
import SeccionSuma from './components/SeccionSuma';
import { motion } from 'framer-motion';

const BASE = '';

const members = [
    {
        name: 'Alberto Cohan',
        role: 'Presidente',
        photo: `${BASE}/fotos/Otros/Personas/Alberto.png`,
        bio: 'Contador Público Nacional. Posgrado en Evaluación de Proyectos, Posgrado en Gestión por Proyectos. Doctor en Economía. Exdocente de la Universidad Tecnológica Nacional – Facultad Regional Santa Fe. Fundador de la Asociación Civil "Río Paraná".',
    },
    {
        name: 'Olegario Tejedor',
        role: 'Vicepresidente',
        photo: `${BASE}/fotos/Otros/Personas/Olegario.png`,
        bio: 'Ingeniero Agrónomo. Asesor y consultor técnico agropecuario. Cofundador de ACSOJA. Expresidente y miembro del directorio de la Bolsa de Comercio de Santa Fe. Socio fundador del Colegio de Ingenieros Agrónomos.',
    },
    {
        name: 'Fabián Beer',
        role: 'Secretario',
        photo: `${BASE}/fotos/Otros/Personas/Fabian.png`,
        bio: 'Reconocido empresario de Santa Fe. Diseñador y fabricante en el rubro pieles. Exportador e importador. Miembro de la Comisión Directiva de la Sociedad Rural de Santa Fe.',
    },
    {
        name: 'Jorge Cohen',
        role: 'Asesor de Relaciones Públicas',
        photo: `${BASE}/fotos/Otros/Personas/Jorge.png`,
        bio: 'Socio Fundador del Grupo Cohen, Agente de Bolsa. Ex Director del Banco de Valores, Ex Director de Canale SA, Ex Miembro del Consejo de Vigilancia del Mercado de Valores, Ex Miembro del Consejo de la Bolsa de Comercio de Buenos Aires.',
    },
    {
        name: 'Ana Cohan',
        role: 'Directora de Capacitación',
        photo: `${BASE}/fotos/Otros/Personas/Anita.png`,
        bio: 'Profesional con experiencia en el diseño, implementación y supervisión de programas de formación para desarrollo de habilidades y mejora del desempeño del personal. Ha participado en proyectos de fortalecimiento de organizaciones civiles y redes de colaboración.',
    },
    {
        name: 'Dolli Barzaghi',
        role: 'Desarrollo Institucional',
        photo: `${BASE}/fotos/Otros/Personas/Dolli.png`,
        bio: 'Contadora Pública Nacional. Especialista en gestión y coordinación de proyectos institucionales, con una destacada trayectoria en la articulación entre el sector privado y organizaciones civiles.',
    },
    {
        name: 'Virginia Roberti',
        role: 'Asesor Legal Corporativo – Área Comercial',
        photo: `${BASE}/fotos/Otros/Personas/Vir.jpg`,
        bio: 'Abogada, Docente. Encargada del asesoramiento jurídico en las operaciones comerciales y contractuales de la Asociación. Atención del cumplimiento de la normativa legal y de los riesgos legales.',
    },
    {
        name: 'Malvina Wiemer',
        role: 'Coordinadora de Reuniones Virtuales',
        photo: `${BASE}/fotos/Otros/Personas/Malvina.jpg`,
        bio: 'Docente. Moderadora y Coordinadora de Encuentros Virtuales, responsable de la planificación, organization, ejecución y moderación de las reuniones virtuales de la Asociación. Responsable de su desarrollo, difusión, convocatoria y seguimiento.',
    },
    {
        name: 'Leonardo Ariel Huser',
        role: 'Coordinador de Reuniones Virtuales',
        photo: `${BASE}/fotos/Otros/Personas/Leo.jpg`,
        bio: 'Comerciante. Coordinador de Encuentros Virtuales, corresponsable de la planificación, organización, ejecución y moderación de las reuniones virtuales de la Asociación. Responsable de su desarrollo, difusión, convocatoria y seguimiento.',
    },
];

const NosotrosPage: React.FC = () => {
    return (
        <div className="min-h-screen selection:bg-primary/20 selection:text-primary">
            {/* Hero */}
            <section className="relative pt-36 pb-10 overflow-hidden bg-navy">
                <div className="absolute inset-0 bg-linear-to-br from-navy via-navy to-slate-900 opacity-95" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl" />
                
                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-blue-100 text-[10px] font-bold uppercase tracking-widest mb-3">Institucional</span>
                        <h1 className="text-5xl md:text-6xl text-white font-serif font-bold leading-tight">Sobre Nosotros</h1>
                    </motion.div>
                </div>
            </section>

            {/* Institutional Text */}
            <section className="section-spacing bg-white">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl text-primary mb-6">Asociación Civil "Río Paraná"</h2>
                        <div className="space-y-5 text-lg text-slate-600 leading-relaxed">
                            <p>
                                Somos una organización no gubernamental, política no partidaria, y sin fines de lucro.
                                Nuestra personería jurídica fue otorgada por la Inspección General de Personas Jurídicas
                                de la Provincia de Santa Fe mediante la <strong>Resolución N° 442 del 29 de mayo de 2014</strong>,
                                gestionada en expediente 01106-0000808-4.
                            </p>
                            <p>
                                Trabajamos en la difusión de las ideas de la libertad, el republicanismo, la democracia
                                y el Estado de Derecho. Somos un grupo de emprendedores que desarrollamos nuestra actividad
                                con el apoyo del sector privado.
                            </p>
                        </div>

                        {/* Quote */}
                        <div className="mt-14 relative bg-accent rounded-3xl p-10 border border-blue-100">
                            <Quote className="text-primary/20 absolute top-8 left-8" size={64} />
                            <div className="relative z-10">
                                <p className="text-xl md:text-2xl font-serif italic text-slate-700 leading-relaxed mb-6">
                                    "Por más egoísta que quiera suponerse al hombre, evidentemente hay algunos elementos
                                    en su naturaleza que lo hacen interesarse en la suerte de los otros de tal modo, que
                                    la felicidad de éstos le es necesaria, aunque de ello nada obtenga, a no ser el placer
                                    de presenciarla."
                                </p>
                                <p className="text-primary font-bold tracking-wide uppercase text-sm">
                                    — Adam Smith, Teoría de los Sentimientos Morales
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Team */}
            <section className="section-spacing bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl text-primary mb-4">Nuestro Equipo</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">
                            Personas comprometidas con los valores de la libertad, el republicanismo y el bien común.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {members.map((member, idx) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.07 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-3xl overflow-hidden card-shadow group"
                            >
                                {/* Photo */}
                                <div className="flex justify-center pt-8 pb-2">
                                    <div className="w-40 h-40 rounded-full overflow-hidden bg-slate-100 border-4 border-white shadow-lg">
                                        <img
                                            src={member.photo}
                                            alt={member.name}
                                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                                {/* Info */}
                                <div className="p-7">
                                    <h3 className="text-xl font-bold text-slate-800 mb-1">{member.name}</h3>
                                    <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-4">{member.role}</p>
                                    <div className="w-10 h-0.5 bg-primary mb-4 rounded-full" />
                                    <p className="text-slate-500 text-sm leading-relaxed">{member.bio}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <SeccionSuma 
                titulo="¿Querés sumarte?"
                subtitulo="Sumate a nuestro equipo de voluntarios y ayudanos a construir el futuro de nuestra región."
            />
        </div>
    );
};

export default NosotrosPage;
