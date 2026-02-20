"use client";

import { useEffect, useRef, useState } from "react";

export default function EventsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-primary py-20">
      <div
        ref={ref}
        className={`mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <span className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
          Eventos
        </span>
        <h2 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">
          Comemore conosco
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70">
          Fazemos eventos particulares para grupos de até 30 pessoas.
          Aniversários, confraternizações e jantares corporativos. Entre em
          contato pra montar o menu ideal pro seu evento.
        </p>
        <a
          href="https://wa.me/5519988887777?text=Olá! Gostaria de saber sobre eventos no Sabor da Villa."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-semibold text-primary transition-all hover:bg-accent-dark hover:shadow-lg"
        >
          Quero fazer um evento
        </a>
      </div>
    </section>
  );
}
