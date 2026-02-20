import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white/90">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Sobre */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-white">
              Sabor da Villa
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Comida brasileira contemporânea com ingredientes de produtores
              locais. Um lugar onde tradição e inovação se encontram no prato.
            </p>
          </div>

          {/* Horários */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-accent">
              Horários
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>
                <span className="text-white/90">Seg a Sex:</span> 11h30–15h |
                18h30–22h30
              </li>
              <li>
                <span className="text-white/90">Sábado:</span> 12h–16h |
                19h–23h
              </li>
              <li>
                <span className="text-white/90">Domingo:</span> 12h–16h
                (almoço)
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-accent">
              Contato
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 text-accent"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.613.613l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.34 0-4.508-.646-6.375-1.766l-.444-.268-2.633.883.883-2.633-.268-.444A9.963 9.963 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
                </svg>
                <a
                  href="https://wa.me/5519988887777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  (19) 98888-7777
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:contato@sabordavilla.campinas.com.br"
                  className="hover:text-accent transition-colors"
                >
                  contato@sabordavilla.campinas.com.br
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 text-accent"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                <a
                  href="https://instagram.com/sabordavilla.campinas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  @sabordavilla.campinas
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  Rua das Palmeiras, 245 — Centro, Campinas/SP
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} Sabor da Villa. Todos os direitos
            reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-xs text-white/50 hover:text-white/80 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/cardapio"
              className="text-xs text-white/50 hover:text-white/80 transition-colors"
            >
              Cardápio
            </Link>
            <Link
              href="/contato"
              className="text-xs text-white/50 hover:text-white/80 transition-colors"
            >
              Contato
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
