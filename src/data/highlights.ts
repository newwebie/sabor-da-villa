export interface Highlight {
  nome: string;
  descricao: string;
  preco: string;
  categoria: string;
  imagem: string;
}

export const highlights: Highlight[] = [
  {
    nome: "Filé ao Molho de Jabuticaba",
    descricao:
      "Filé mignon com redução de jabuticaba, purê de mandioquinha e farofa crocante",
    preco: "R$ 89",
    categoria: "Jantar",
    imagem:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop",
  },
  {
    nome: "Executivo do Dia",
    descricao:
      "Prato principal + arroz, feijão, salada e sobremesa. Muda todo dia.",
    preco: "A partir de R$ 39",
    categoria: "Almoço",
    imagem:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop",
  },
  {
    nome: "Moqueca Campineira",
    descricao:
      "Peixe fresco do dia com leite de coco, dendê e pirão. Serve 2 pessoas.",
    preco: "R$ 110",
    categoria: "Jantar",
    imagem:
      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&h=400&fit=crop",
  },
  {
    nome: "Pudim de Leite da Vó",
    descricao:
      "Receita tradicional com calda de caramelo e toque de baunilha",
    preco: "R$ 18",
    categoria: "Sobremesa",
    imagem:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=400&fit=crop",
  },
];
