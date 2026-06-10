export default function WhatsAppButton() {
    const mensaje = encodeURIComponent("Hola CarlosTech, necesito ayuda con mi equipo")
    return (
        <a                
            href={`https://wa.me/573239246604?text=${mensaje}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-9 h-9 rounded-full shadow-lg transition-transform hover:scale-110"
            style={{ backgroundColor: "#25D366" }}
            aria-label="Contactar por WhatsApp"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-6 h-6 fill-white">
                <path d="M16 0C7.163 0 0 7.163 0 16c0 2.833.738 5.493 2.03 7.807L0 32l8.43-2.01A15.94 15.94 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm8.07 22.93c-.334.94-1.95 1.8-2.678 1.91-.686.104-1.55.148-2.5-.157-.576-.183-1.315-.426-2.256-.834-3.97-1.714-6.563-5.72-6.76-5.985-.196-.265-1.6-2.128-1.6-4.062 0-1.934 1.015-2.88 1.376-3.27.36-.39.785-.487 1.046-.487.261 0 .522.002.75.014.24.012.563-.091.882.673.334.796 1.133 2.73 1.233 2.928.1.196.166.425.033.685-.134.26-.2.423-.397.65-.196.228-.413.51-.59.685-.196.196-.4.408-.172.8.228.392.013.696 1.405 2.334 1.66 1.96 3.054 2.57 3.446 2.864.392.294.62.245.85-.147.228-.392.978-1.143 1.24-1.535.26-.392.522-.326.882-.196.36.13 2.287 1.078 2.68 1.274.392.196.653.294.75.457.098.163.098.946-.236 1.886z"/>
            </svg>
        </a>
    )
}