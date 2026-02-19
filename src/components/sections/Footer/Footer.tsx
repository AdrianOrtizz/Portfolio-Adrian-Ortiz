const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-zinc-900 bg-black/50 backdrop-blur-md py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-zinc-500 text-sm font-medium">
            © {currentYear} — <span className="text-white">Adrian Ortiz</span>
          </p>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">
              Disponible para nuevos proyectos
            </span>
          </div>
        </div>

        <div className="text-center md:text-right">
          <p className="text-zinc-600 text-[11px] leading-relaxed uppercase tracking-tighter">
            Diseñado y desarrollado con <br className="md:hidden" />
            <span className="text-zinc-400">
              Next.js • Tailwind • Framer Motion
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
