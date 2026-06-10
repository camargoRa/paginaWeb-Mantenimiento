import { useState, useEffect } from "react";

const slides = [
    {
        titulo: "Reparación de computadores",
        descripcion: "Solucionamos fallas de hardware y software en portátiles y equipos de escritorio.",
        imagen: "/reparacion.webp"
    },
    {
        titulo: "Mantenimiento preventivo",
        descripcion: "Limpieza interna, cambio de pasta térmica y revisión general de tu equipo.",
        imagen: "/mantenimiento.webp"
    },
    {
        titulo: "Formateo y reinstalación",
        descripcion: "Formateo completo con respaldo de archivos y reinstalación de Windows 10 y 11.",
        imagen: "/formateo.webp"
    }
];

export default function Carrusel() {
    const [actual, setActual] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setActual(prev => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(intervalo);
    }, []);

    const { titulo, descripcion, imagen } = slides[actual];

    return (
        <div className="bg-slate-900 py-16 px-6 w-full">
            <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">

                <div className="flex-1 flex flex-col gap-4 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-50 leading-snug transition-all duration-500">
                        {titulo}
                    </h2>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        {descripcion}
                    </p>
                </div>

                <div className="flex-1 flex items-center justify-center">
                    <img
                        src={imagen}
                        alt={titulo}
                        className="w-56 h-56 md:w-80 md:h-80 object-contain"
                    />
                </div>

            </div>

            <div className="flex justify-center gap-2 mt-8">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setActual(i)}
                        className={`h-2 rounded-full transition-all ${i === actual ? "bg-blue-400 w-4" : "bg-slate-600 w-2"}`}
                    />
                ))}
            </div>
        </div>
    );
}