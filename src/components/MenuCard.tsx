import Image from "next/image";
import { MenuItem } from "../data/menu";

export default function MenuCard({ item }: { item: MenuItem }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-primary/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={item.imagem}
          alt={item.nome}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-heading text-lg font-semibold text-text group-hover:text-primary transition-colors">
            {item.nome}
          </h3>
          <span className="shrink-0 rounded-full bg-accent/10 px-3 py-1 font-heading text-sm font-bold text-accent-dark">
            {item.preco}
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-text-light">
          {item.descricao}
        </p>
      </div>
    </div>
  );
}
