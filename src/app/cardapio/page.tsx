import type { Metadata } from "next";
import CardapioContent from "../../components/CardapioContent";

export const metadata: Metadata = {
  title: "Cardápio — Sabor da Villa | Restaurante em Campinas",
  description:
    "Confira nosso cardápio sazonal: executivos a partir de R$39, pratos autorais, sobremesas artesanais e carta de vinhos brasileiros.",
};

export default function CardapioPage() {
  return <CardapioContent />;
}
