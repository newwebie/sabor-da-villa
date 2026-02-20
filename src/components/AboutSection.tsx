"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";

const stats: { label: string; icon: ReactNode }[] = [
  {
    label: "5 anos em Campinas",
    icon: (
      <svg className="h-7 w-7 text-accent-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
  },
  {
    label: "Ingredientes locais",
    icon: (
      <svg className="h-7 w-7 text-accent-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.2 0-4.8 1.2-4.8 6 0 3 1.8 4.8 3.6 5.4V21h2.4v-6.6c1.8-.6 3.6-2.4 3.6-5.4 0-4.8-3.6-6-4.8-6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3V1.5M9 4.5L7.5 3M15 4.5l1.5-1.5" />
      </svg>
    ),
  },
  {
    label: "Menu sazonal",
    icon: (
      <svg className="h-7 w-7 text-accent-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
];

export default function AboutSection() {
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
    <section className="bg-bg py-24" id="sobre">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-accent-dark">
              Nossa História
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-text sm:text-4xl">
              Do campo à mesa, com{" "}
              <span className="text-primary">carinho de Campinas</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-light">
              O Sabor da Villa nasceu da vontade de trazer o melhor da comida
              brasileira com ingredientes frescos de produtores da região de
              Campinas. A Chef Carolina Duarte comanda a cozinha com um menu que
              muda a cada estação, sempre respeitando o que a terra oferece de
              melhor.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-text-light">
              Aqui, cada prato conta uma história. Do almoço executivo que
              alimenta o seu dia ao jantar autoral que transforma uma noite
              comum em especial.
            </p>
          </div>

          {/* Chef photo */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop"
                alt="Chef Carolina Duarte preparando pratos na cozinha do Sabor da Villa"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-xl bg-accent/20" />
            <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-primary/10" />
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-4 rounded-xl border border-primary/10 bg-white p-6 shadow-sm"
            >
              {stat.icon}
              <span className="font-heading text-lg font-semibold text-primary">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
