"use client";

import { categorias } from "../data/menu";

interface MenuFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function MenuFilter({
  activeCategory,
  onCategoryChange,
}: MenuFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categorias.map((cat) => (
        <button
          key={cat.key}
          onClick={() => onCategoryChange(cat.key)}
          className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
            activeCategory === cat.key
              ? "bg-primary text-white shadow-lg"
              : "bg-white text-text-light border border-primary/15 hover:border-primary/30 hover:text-primary"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
