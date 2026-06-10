export default function Informacion() {
    return (
        <section className="bg-slate-900 py-16 px-6">
            <div className="text-center mb-12">
                <span className="bg-slate-800 text-blue-400 text-xs font-medium px-4 py-1 rounded-full border border-slate-700">
                    Nuestros servicios
                </span>
                <h2 className="text-3xl font-bold text-slate-50 mt-4 mb-2">¿En qué te podemos ayudar?</h2>
                <p className="text-slate-400 text-sm">Soluciones técnicas rápidas y garantizadas en Medellín.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-7 flex flex-col gap-4">
                    <div className="bg-slate-900 rounded-lg w-12 h-12 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <rect x="2" y="3" width="20" height="14" rx="2"/>
                            <path d="M8 21h8M12 17v4"/>
                            <path d="M6 7h4M6 10h2"/>
                        </svg>
                    </div>
                    <h3 className="text-slate-50 font-semibold">Reparación de computadores</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">Solucionamos fallas de hardware y software en portátiles y equipos de escritorio.</p>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-7 flex flex-col gap-4">
                    <div className="bg-slate-900 rounded-lg w-12 h-12 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                            <path d="M9 12l2 2 4-4"/>
                        </svg>
                    </div>
                    <h3 className="text-slate-50 font-semibold">Mantenimiento de computadores</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">Realizamos mantenimiento físico y lógico en computadores de escritorio y portátiles.</p>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-7 flex flex-col gap-4">
                    <div className="bg-slate-900 rounded-lg w-12 h-12 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/>
                            <path d="M21 3v5h-5"/>
                            <path d="M12 8v4l3 3"/>
                        </svg>
                    </div>
                    <h3 className="text-slate-50 font-semibold">Formateo y reinstalación</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">Formateo completo con respaldo de archivos y reinstalación de Windows 10 y 11.</p>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-7 flex flex-col gap-4">
                    <div className="bg-slate-900 rounded-lg w-12 h-12 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <rect x="9" y="9" width="6" height="6" rx="1"/>
                            <path d="M15 2v3M9 2v3M15 19v3M9 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/>
                            <rect x="4" y="4" width="16" height="16" rx="2"/>
                        </svg>
                    </div>
                    <h3 className="text-slate-50 font-semibold">Actualización de hardware</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">Mejoramos la velocidad de tu computador cambiando disco, aumentando RAM o actualizando componentes.</p>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-7 flex flex-col gap-4">
                    <div className="bg-slate-900 rounded-lg w-12 h-12 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <rect x="2" y="3" width="20" height="14" rx="2"/>
                            <path d="M8 21h8M12 17v4"/>
                            <path d="M9 9.5a4.5 4.5 0 0 1 6 0"/>
                            <path d="M11.5 12a1.5 1.5 0 0 1 1 0"/>
                        </svg>
                    </div>
                    <h3 className="text-slate-50 font-semibold">Soporte Remoto</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">Ofrecemos asistencia remota para resolver problemas de software y mantenimiento lógico.</p>
                </div>

            </div>
        </section>
    )
}