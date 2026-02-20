"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { highlights } from "../data/highlights";

export default function MenuHighlights() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-cream py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-accent-dark">
            Destaques
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-text sm:text-4xl">
            O melhor do nosso cardápio
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, i) => (
            <div
              key={item.nome}
              className="group overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.imagem}
                  alt={item.nome}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute left-3 top-3">
                  <span className="inline-block rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-primary shadow-sm backdrop-blur-sm">
                    {item.categoria}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-heading text-lg font-semibold text-text">
                  {item.nome}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  {item.descricao}
                </p>
                <p className="mt-3 font-heading text-lg font-bold text-accent-dark">
                  {item.preco}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/cardapio"
            className="inline-block rounded-full bg-primary px-8 py-4 font-semibold text-white transition-all hover:bg-primary-light hover:shadow-lg"
          >
            Ver cardápio completo
          </Link>
        </div>
      </div>
    </section>
  );
}
