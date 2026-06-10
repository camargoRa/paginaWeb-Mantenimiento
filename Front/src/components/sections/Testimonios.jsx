import { testimonios } from "../../data/testimonios"

export default function Testimonios() {
    return (
        <section className="py-16 px-6 bg-gray-950">
            <h2 className="text-3xl font-bold text-center text-white mb-10">Testimonios</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {testimonios.map((t) => (
                <article key={t.id} className="bg-gray-800 rounded-2xl p-6 shadow-lg border" style={{ borderColor: "#2563EB" }}>
                    <span className="text-yellow-400 text-xl">{t.estrellas}</span>
                    <h4 className="font-semibold mt-2" style={{ color: "#FFFFFF" }}>{t.nombre}</h4>
                    <p className="text-sm mt-1" style={{ color: "#9CA3AF" }}>{t.comentario}</p>
                </article>
                ))}
            </div>
        </section>
    )
}