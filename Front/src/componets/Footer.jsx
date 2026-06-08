export default function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 py-10 px-6" id="Footer">
            <div className="max-w-5xl mx-auto flex justify-between items-start gap-12 pb-8 border-b border-slate-800">

                <div className="flex flex-col gap-2">
                    <span className="text-lg font-medium text-slate-50">Carlos<span className="text-blue-400">Tech</span></span>
                    <p className="text-slate-500 text-sm max-w-[180px] leading-relaxed">Servicio técnico de confianza en Medellín.</p>
                </div>

                <div className="flex flex-col gap-1">
                    <h4 className="text-slate-400 text-xs font-medium uppercase tracking-widest mb-2">Horarios</h4>
                    <span className="text-slate-500 text-sm">Lun – Vie: 8:00 AM – 6:00 PM</span>
                    <span className="text-slate-500 text-sm">Sáb: 9:00 AM – 1:00 PM</span>
                </div>

                <div className="flex flex-col gap-3">
                    <h4 className="text-slate-400 text-xs font-medium uppercase tracking-widest mb-1">Contacto</h4>
                    <a href="https://maps.app.goo.gl/Yn9XNoiKRG6ybS786" target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate-500 hover:text-slate-300 text-sm transition-colors">
                        <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        Medellín, Colombia
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=573239246604" target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate-500 hover:text-slate-300 text-sm transition-colors">
                        <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/></svg>
                        3239246604
                    </a>
                    <a href="mailto:rarezcarl@gmail.com"
                        className="flex items-center gap-2 text-slate-500 hover:text-slate-300 text-sm transition-colors">
                        <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                        rarezcarl@gmail.com
                    </a>
                </div>

            </div>

            <div className="max-w-5xl mx-auto pt-5 flex justify-center">
                <span className="text-xs text-slate-600 tracking-wide">&copy; 2026 CarlosTech. All rights reserved.</span>
            </div>
        </footer>
    )
}