import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header className="bg-slate-900 border-b border-slate-800 px-6 flex justify-between items-center h-[60px] fixed w-full">
            <span className="text-lg font-medium text-slate-50 tracking-wide">
                Carlos<span className="text-blue-400">Tech</span>
            </span>
            <ul className="flex items-center gap-1 list-none">
                <li>
                    <Link to="/" className="text-slate-400 hover:text-slate-50 hover:bg-slate-800 text-sm px-4 py-1.5 rounded-md transition-all">
                        Inicio
                    </Link>
                </li>
                <li>
                    <a href="#Pedido" className="text-slate-400 hover:text-slate-50 hover:bg-slate-800 text-sm px-4 py-1.5 rounded-md transition-all">
                        Pedidos
                    </a>
                </li>
                <li>
                    <a href="#Contacto" className="text-slate-400 hover:text-slate-50 hover:bg-slate-800 text-sm px-4 py-1.5 rounded-md transition-all">
                        Contacto
                    </a>
                </li>
                <li>
                    <a href="#Footer" className="text-slate-400 hover:text-slate-50 hover:bg-slate-800 text-sm px-4 py-1.5 rounded-md transition-all">
                        Sobre nosotros
                    </a>
                </li>
            </ul>
        </header>
    )
}