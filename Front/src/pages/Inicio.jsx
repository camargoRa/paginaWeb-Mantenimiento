import Contactos from "../components/sections/Contactos"
import Pedido from "../components/sections/Pedido"
import Informacion from "../components/sections/Informacion"
import Testimonios from "../components/sections/Testimonios"
import Carrusel from "../components/sections/Carrucel"
import PorQueElegirnos from "../components/sections/PorQueElegirnos"
export default function Inicio() {
    return (
        <>
        <Carrusel />
        <Informacion />
        <PorQueElegirnos />
        <Testimonios />
        <Contactos />
        <Pedido />
        </>
    )
}