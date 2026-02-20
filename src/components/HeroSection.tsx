import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex h-[75vh] min-h-[500px] max-h-[800px] items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80"
        alt="Ambiente interno do restaurante Sabor da Villa"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <span className="mb-4 inline-block font-body text-sm font-medium uppercase tracking-[0.3em] text-accent">
          Restaurante &bull; Campinas/SP
        </span>
        <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Comida brasileira com{" "}
          <span className="text-accent">alma de Campinas</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
          Ingredientes de produtores locais, receitas autorais e um ambiente que
          faz você se sentir em casa. Venha almoçar ou jantar com a gente.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/cardapio"
            className="w-full rounded-full bg-accent px-8 py-4 text-center font-semibold text-primary transition-all hover:bg-accent-dark hover:shadow-xl sm:w-auto"
          >
            Ver Cardápio
          </Link>
          <a
            href="https://wa.me/5519988887777?text=Olá! Vim pelo site e gostaria de reservar uma mesa no Sabor da Villa."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full border-2 border-white/30 px-8 py-4 text-center font-semibold text-white transition-all hover:border-white hover:bg-white/10 sm:w-auto"
          >
            Reservar mesa
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <svg
          className="h-8 w-8 animate-bounce text-white/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
