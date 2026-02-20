import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import SchemaMarkup from "../components/SchemaMarkup";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sabor da Villa — Restaurante de Comida Brasileira em Campinas",
  description:
    "Comida brasileira contemporânea com ingredientes de produtores locais. Almoço executivo e jantar autoral no centro de Campinas. Reserve pelo WhatsApp.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <SchemaMarkup />
      </head>
      <body
        className={`${playfair.variable} ${sourceSans.variable} antialiased`}
      >
        {/* Botão Voltar + Badge */}
        <div className="fixed bottom-6 left-6 z-[60] flex flex-col items-start gap-2">
          <a
            href="https://freelasite.vercel.app/#portfolio"
            className="inline-flex items-center gap-1.5 bg-white/60 backdrop-blur-md text-[#1e293b]/70 text-xs font-medium pl-2.5 pr-3 py-1.5 rounded-lg border border-[#e2e8f0]/50 hover:bg-white/90 hover:text-[#1e293b] transition-all duration-200"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
            Voltar
          </a>
          <div className="bg-[#0f172a]/80 backdrop-blur-md text-[#94a3b8] text-[10px] font-semibold tracking-wider px-3 py-1.5 rounded-lg border border-white/10">
            Exemplo de site — <span className="text-accent">Plano Cresca</span>
          </div>
        </div>

        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
