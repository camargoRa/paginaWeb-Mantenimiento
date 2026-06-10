import { useState } from "react"
import { Link } from "react-router-dom"

export default function Header() {
    const [open, setOpen] = useState(false)

    return (
        <header className="bg-slate-900 border-b border-slate-800 px-6 flex justify-between items-center h-[60px] fixed w-full z-50">
            <span className="text-lg font-medium text-slate-50 tracking-wide">
                Carlos<span className="text-blue-400">Tech</span>
            </span>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-1 list-none">
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

            {/* Hamburger */}
            <button
                className="md:hidden text-slate-400 hover:text-slate-50 flex flex-col gap-1.5 p-2"
                onClick={() => setOpen(!open)}
            >
                <span className={`block w-5 h-0.5 bg-current transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block w-5 h-0.5 bg-current transition-all ${open ? "opacity-0" : ""}`} />
                <span className={`block w-5 h-0.5 bg-current transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>

            {/* Mobile menu */}
            {open && (
                <ul className="md:hidden absolute top-[60px] left-0 w-full bg-slate-900 border-t border-slate-800 flex flex-col list-none px-4 py-3 gap-1">
                    <li>
                        <Link to="/" onClick={() => setOpen(false)} className="block text-slate-400 hover:text-slate-50 hover:bg-slate-800 text-sm px-4 py-2 rounded-md transition-all">
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <a href="#Pedido" onClick={() => setOpen(false)} className="block text-slate-400 hover:text-slate-50 hover:bg-slate-800 text-sm px-4 py-2 rounded-md transition-all">
                            Pedidos
                        </a>
                    </li>
                    <li>
                        <a href="#Contacto" onClick={() => setOpen(false)} className="block text-slate-400 hover:text-slate-50 hover:bg-slate-800 text-sm px-4 py-2 rounded-md transition-all">
                            Contacto
                        </a>
                    </li>
                    <li>
                        <a href="#Footer" onClick={() => setOpen(false)} className="block text-slate-400 hover:text-slate-50 hover:bg-slate-800 text-sm px-4 py-2 rounded-md transition-all">
                            Sobre nosotros
                        </a>
                    </li>
                </ul>
            )}
        </header>
    )
}