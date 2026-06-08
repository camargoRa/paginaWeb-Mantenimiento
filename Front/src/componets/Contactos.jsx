export default function Contactos() {
    return (
        <div id="Contacto" className="flex flex-col items-center justify-center h-[700px] p-6 bg-slate-900 text-center">
            <h2 className="bg-linear-to-r from-indigo-500 to-blue-300 bg-clip-text text-5xl font-extrabold text-transparent p-2">
                Solicita tu servicio técnico en Medellín
            </h2>
            <p className="text-zinc-400 mt-2">Estamos listos para ayudarte en cualquier momento.</p>
            <a
                href="https://api.whatsapp.com/send?phone=573239246604"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded mt-6 transition-colors">
                Contáctanos
            </a>
        </div>
    )
}