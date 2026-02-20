export interface MenuItem {
  nome: string;
  descricao: string;
  preco: string;
  imagem: string;
}

export interface MenuData {
  [key: string]: MenuItem[];
}

export const categorias: { key: string; label: string }[] = [
  { key: "almoco_executivo", label: "Almoço Executivo" },
  { key: "entradas", label: "Entradas" },
  { key: "pratos_principais", label: "Pratos Principais" },
  { key: "sobremesas", label: "Sobremesas" },
  { key: "bebidas", label: "Bebidas" },
];

export const cardapio: MenuData = {
  almoco_executivo: [
    {
      nome: "Executivo do Dia",
      descricao:
        "Prato principal + arroz, feijão, salada e sobremesa. Muda todo dia.",
      preco: "R$ 39",
      imagem:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
    },
    {
      nome: "Executivo Premium",
      descricao: "Proteína nobre + 2 acompanhamentos à escolha + sobremesa",
      preco: "R$ 55",
      imagem:
        "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop",
    },
  ],
  entradas: [
    {
      nome: "Bolinho de Mandioca com Carne Seca",
      descricao: "6 unidades com geleia de pimenta da casa",
      preco: "R$ 28",
      imagem:
        "https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?w=400&h=300&fit=crop",
    },
    {
      nome: "Bruschetta de Tomate Cereja",
      descricao: "Pão artesanal com tomate, manjericão e azeite trufado",
      preco: "R$ 24",
      imagem:
        "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=300&fit=crop",
    },
    {
      nome: "Ceviche de Peixe Branco",
      descricao: "Peixe do dia, leite de tigre, cebola roxa e coentro",
      preco: "R$ 36",
      imagem:
        "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?w=400&h=300&fit=crop",
    },
  ],
  pratos_principais: [
    {
      nome: "Filé ao Molho de Jabuticaba",
      descricao:
        "Filé mignon com redução de jabuticaba, purê de mandioquinha e farofa crocante",
      preco: "R$ 89",
      imagem:
        "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
    },
    {
      nome: "Moqueca Campineira",
      descricao:
        "Peixe fresco do dia com leite de coco, dendê e pirão. Serve 2.",
      preco: "R$ 110",
      imagem:
        "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&h=300&fit=crop",
    },
    {
      nome: "Risoto de Cogumelos",
      descricao:
        "Arroz arbóreo com mix de cogumelos frescos, parmesão e trufa",
      preco: "R$ 72",
      imagem:
        "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=300&fit=crop",
    },
    {
      nome: "Costela Desfiada",
      descricao:
        "12 horas de cozimento lento, polenta cremosa e gremolata",
      preco: "R$ 85",
      imagem:
        "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop&crop=bottom",
    },
    {
      nome: "Frango Caipira ao Molho Mostarda",
      descricao:
        "Sobrecoxa desossada com mostarda Dijon, batata rústica e legumes",
      preco: "R$ 65",
      imagem:
        "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400&h=300&fit=crop",
    },
  ],
  sobremesas: [
    {
      nome: "Pudim de Leite da Vó",
      descricao:
        "Receita tradicional com calda de caramelo e toque de baunilha",
      preco: "R$ 18",
      imagem:
        "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop",
    },
    {
      nome: "Petit Gâteau",
      descricao:
        "Bolo quente de chocolate com sorvete de creme e calda de frutas vermelhas",
      preco: "R$ 28",
      imagem:
        "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&h=300&fit=crop",
    },
    {
      nome: "Romeu e Julieta Desconstruído",
      descricao:
        "Mousse de goiabada com crocante de queijo minas e calda de goiaba",
      preco: "R$ 22",
      imagem:
        "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=400&h=300&fit=crop",
    },
  ],
  bebidas: [
    {
      nome: "Suco Natural",
      descricao: "Laranja, limão, maracujá, abacaxi ou manga",
      preco: "R$ 12",
      imagem:
        "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400&h=300&fit=crop",
    },
    {
      nome: "Caipirinha da Casa",
      descricao: "Cachaça artesanal com fruta da estação",
      preco: "R$ 22",
      imagem:
        "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=400&h=300&fit=crop",
    },
    {
      nome: "Vinho da Casa (taça)",
      descricao: "Seleção de vinhos brasileiros — pergunte ao garçom",
      preco: "A partir de R$ 28",
      imagem:
        "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop",
    },
    {
      nome: "Água / Refrigerante",
      descricao: "Água mineral com ou sem gás / Refrigerante lata",
      preco: "R$ 6 / R$ 8",
      imagem:
        "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&h=300&fit=crop",
    },
  ],
};
