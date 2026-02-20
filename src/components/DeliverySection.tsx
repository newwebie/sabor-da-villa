"use client";

import { useEffect, useRef, useState } from "react";

export default function DeliverySection() {
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
    <section className="bg-cream py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <span className="text-sm font-medium uppercase tracking-[0.2em] text-accent-dark">
          Delivery
        </span>
        <h2 className="mt-3 font-heading text-3xl font-bold text-text sm:text-4xl">
          Receba em casa
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-text-light">
          Entregamos na região central de Campinas. Faça seu pedido pelo
          WhatsApp!
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-primary/10 bg-white p-6 shadow-sm">
            <svg className="mx-auto h-8 w-8 text-accent-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0H21M3.375 14.25h3.75L8.25 9.75h4.5l1.125 4.5h3.75M3.375 14.25V6.375c0-.621.504-1.125 1.125-1.125h4.5" />
            </svg>
            <p className="mt-3 text-sm font-semibold text-primary">
              Taxa de entrega
            </p>
            <p className="text-sm text-text-light">A partir de R$ 5</p>
          </div>
          <div className="rounded-xl border border-primary/10 bg-white p-6 shadow-sm">
            <svg className="mx-auto h-8 w-8 text-accent-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="mt-3 text-sm font-semibold text-primary">
              Pedido mínimo
            </p>
            <p className="text-sm text-text-light">R$ 40</p>
          </div>
          <div className="rounded-xl border border-primary/10 bg-white p-6 shadow-sm">
            <svg className="mx-auto h-8 w-8 text-accent-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="mt-3 text-sm font-semibold text-primary">
              Horário
            </p>
            <p className="text-sm text-text-light">11h30 às 14h30 (Seg-Sex)</p>
          </div>
        </div>

        <a
          href="https://wa.me/5519988887777?text=Olá! Gostaria de fazer um pedido para delivery."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-4 font-semibold text-white transition-all hover:bg-[#20BD5A] hover:shadow-lg"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Pedir pelo WhatsApp
        </a>
      </div>
    </section>
  );
}
