export interface Testimonial {
  nome: string;
  texto: string;
  estrelas: number;
}

export const testimonials: Testimonial[] = [
  {
    nome: "Fernanda Costa",
    texto:
      "Melhor executivo de Campinas. Comida caseira com um toque especial. Venho toda semana no almoço.",
    estrelas: 5,
  },
  {
    nome: "Ricardo Mendes",
    texto:
      "Levei minha esposa pra jantar e ficamos impressionados. O filé ao molho de jabuticaba é imperdível. Ambiente acolhedor.",
    estrelas: 5,
  },
  {
    nome: "Juliana Prado",
    texto:
      "Adoro que o menu muda com a estação. Sempre tem algo novo pra experimentar. E o preço do almoço é super justo.",
    estrelas: 5,
  },
];
