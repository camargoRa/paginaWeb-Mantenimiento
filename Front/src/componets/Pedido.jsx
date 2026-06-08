function enviarFormulario(e) {
    e.preventDefault();
    const mensaje = 'Solicitud de servicio técnico:\n' +
        `Nombre: ${e.target.nombre.value}\n` +
        `Apellido: ${e.target.apellido.value}\n` +
        `Correo: ${e.target.correo.value}\n` +
        `Teléfono: ${e.target.telefono.value}\n` +
        `Descripción: ${e.target.descripcion.value}`;

    const url = 'https://api.whatsapp.com/send?phone=573239246604&text=' + encodeURIComponent(mensaje);
    window.open(url, '_blank');
}

export default function Pedido() {
    return (
        <div className="min-h-screen flex items-center justify-center px-10" id="Pedido">
            <div className="flex flex-row items-center gap-12 w-full max-w-5xl">

                <div className="flex-1 flex flex-col gap-4">
                    <h2 className="text-3xl font-bold leading-snug">Solicite su servicio técnico</h2>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        Complete el formulario para solicitar nuestro servicio técnico.
                        Nos pondremos en contacto lo antes posible para coordinar la reparación de su equipo.
                    </p>
                    <ul className="flex flex-col gap-3 mt-2 text-sm text-gray-500">
                        <li>⏱ Respuesta en menos de 24 horas</li>
                        <li>📍 Servicio a domicilio en Medellín</li>
                        <li>🛡 Garantía en todas las reparaciones</li>
                    </ul>
                </div>

                <div className="flex-1 bg-white border border-gray-100 rounded-xl shadow-sm p-7">
                    <h3 className="text-lg font-medium mb-5">Formulario de pedido</h3>
                    {}
                    <form onSubmit={enviarFormulario}>
                        <div className="flex gap-3 mb-4">
                            {}
                            <input name="nombre" type="text" placeholder="Nombre" className="flex-1 border border-gray-200 rounded-md p-2 text-sm" required />
                            <input name="apellido" type="text" placeholder="Apellido" className="flex-1 border border-gray-200 rounded-md p-2 text-sm" required />
                        </div>
                        <input name="correo" type="email" placeholder="Correo electrónico" className="w-full border border-gray-200 rounded-md p-2 mb-4 text-sm" required />
                        <input name="telefono" type="text" placeholder="Número de teléfono" className="w-full border border-gray-200 rounded-md p-2 mb-4 text-sm" required />
                        <textarea name="descripcion" placeholder="Descripción del problema" className="w-full border border-gray-200 rounded-md p-2 mb-5 text-sm resize-none h-24" required></textarea>
                        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-md p-2 text-sm font-medium transition-colors">
                            Enviar solicitud
                        </button>
                    </form>
                </div>

            </div>
        </div>
    )
}