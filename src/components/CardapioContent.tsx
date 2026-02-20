"use client";

import { useState } from "react";
import MenuFilter from "./MenuFilter";
import MenuCard from "./MenuCard";
import { cardapio } from "../data/menu";

export default function CardapioContent() {
  const [activeCategory, setActiveCategory] = useState("almoco_executivo");

  const items = cardapio[activeCategory] || [];

  return (
    <>
      {/* Hero */}
      <section className="bg-primary pt-32 pb-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
            Nosso Cardápio
          </h1>
          <p className="mt-4 text-lg text-white/70">
            Menu sazonal — atualizado a cada 3 meses com o melhor da estação
          </p>
        </div>
      </section>

      {/* Filtro + Cards */}
      <section className="bg-bg py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <MenuFilter
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {items.map((item) => (
              <MenuCard key={item.nome} item={item} />
            ))}
          </div>

          {/* Nota sazonal */}
          <p className="mt-12 text-center text-sm italic text-text-light">
            Nosso cardápio é sazonal e muda a cada 3 meses. Alguns itens podem
            variar conforme disponibilidade dos ingredientes.
          </p>

          {/* CTA */}
          <div className="mt-12 text-center">
            <a
              href="https://wa.me/5519988887777?text=Olá! Vim pelo site e gostaria de reservar uma mesa no Sabor da Villa."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-white transition-all hover:bg-primary-light hover:shadow-lg"
            >
              Gostou? Reserve sua mesa!
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
