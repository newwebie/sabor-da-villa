"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const photos = [
  {
    label: "Filé ao Molho de Jabuticaba",
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=800&fit=crop",
    className: "col-span-2 row-span-2",
  },
  {
    label: "Ambiente Interno",
    src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&h=600&fit=crop",
    className: "",
  },
  {
    label: "Bar e Carta de Vinhos",
    src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&h=600&fit=crop",
    className: "",
  },
  {
    label: "Sobremesa Artesanal",
    src: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=600&fit=crop",
    className: "",
  },
  {
    label: "Equipe na Cozinha",
    src: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&h=600&fit=crop",
    className: "",
  },
  {
    label: "Fachada do Restaurante",
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=400&fit=crop",
    className: "col-span-2",
  },
  {
    label: "Mesa Posta",
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=600&fit=crop",
    className: "",
  },
  {
    label: "Ingredientes Frescos",
    src: "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=600&h=600&fit=crop",
    className: "",
  },
];

export default function PhotoGallery() {
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
    <section className="bg-bg py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-accent-dark">
            Galeria
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-text sm:text-4xl">
            Conheça nosso espaço
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[220px]">
          {photos.map((photo) => (
            <div
              key={photo.label}
              className={`group relative overflow-hidden rounded-xl ${photo.className}`}
            >
              <Image
                src={photo.src}
                alt={photo.label}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="font-heading text-sm font-medium text-white drop-shadow-lg">
                  {photo.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
