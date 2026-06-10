import { ventajas } from "../../data/ventajas"

export default function PorQueElegirnos() {
    return (
        <section className="py-16 px-6 bg-gray-900">
            <h2 className="text-3xl font-bold text-center text-white mb-10">¿Por qué elegirnos?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {ventajas.map((v, i) => (
                    <div key={i} className="bg-gray-800 rounded-2xl p-6 shadow-lg flex items-start gap-4">
                        <span className="text-green-400 text-2xl mt-1">✓</span>
                        <div>
                            <h4 className="text-white font-semibold">{v.titulo}</h4>
                            <p className="text-gray-400 text-sm mt-1">{v.desc}</p>
                            
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}