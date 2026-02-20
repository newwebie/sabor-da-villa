"use client";

import { useEffect, useRef, useState } from "react";
import { hours } from "../data/hours";

export default function HoursLocation() {
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
    <section className="bg-bg py-24" id="localizacao">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-accent-dark">
            Visite-nos
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-text sm:text-4xl">
            Horário e Localização
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Horários */}
          <div className="rounded-2xl border border-primary/10 bg-white p-8 shadow-sm">
            <h3 className="font-heading text-xl font-semibold text-primary">
              Horários de Funcionamento
            </h3>
            <div className="mt-6 overflow-hidden rounded-lg">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary/5">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-primary">
                      Dia
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-primary">
                      Almoço
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-primary">
                      Jantar
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {hours.map((h, i) => (
                    <tr
                      key={h.dia}
                      className={i % 2 === 0 ? "bg-white" : "bg-primary/[0.02]"}
                    >
                      <td className="px-4 py-3 text-sm font-medium text-text">
                        {h.dia}
                      </td>
                      <td className="px-4 py-3 text-sm text-text-light">
                        {h.almoco}
                      </td>
                      <td className="px-4 py-3 text-sm text-text-light">
                        <span
                          className={
                            h.jantar === "Fechado"
                              ? "text-red-500/80"
                              : ""
                          }
                        >
                          {h.jantar}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-text-light">
              * Horários sujeitos a alteração em feriados
            </p>
          </div>

          {/* Mapa */}
          <div className="overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-sm">
            <iframe
              title="Localização Sabor da Villa"
              src="https://maps.google.com/maps?q=-22.9064,-47.0616&z=16&output=embed"
              className="h-64 w-full lg:h-full lg:min-h-[350px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="p-4">
              <p className="text-sm font-medium text-text">
                Rua das Palmeiras, 245 — Centro, Campinas/SP
              </p>
              <p className="mt-1 text-xs text-text-light">
                Próximo à Praça Carlos Gomes
              </p>
              <div className="mt-3 flex gap-3">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=-22.9064,-47.0616"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-primary/15 px-3 py-1.5 text-xs font-medium text-primary transition-all hover:bg-primary hover:text-white"
                >
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Google Maps
                </a>
                <a
                  href="https://waze.com/ul?ll=-22.9064,-47.0616&navigate=yes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-primary/15 px-3 py-1.5 text-xs font-medium text-primary transition-all hover:bg-primary hover:text-white"
                >
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Waze
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
