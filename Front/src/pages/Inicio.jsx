import Contactos from "../componets/Contactos"
import Pedido from "../componets/Pedido"
import Informacion from "../componets/Informacion"
import Carrusel from "../componets/Carrucel"
export default function Inicio() {
    return (
        <>
        <Carrusel />
        <Informacion />
        <Contactos />
        <Pedido />
        </>
    )
}