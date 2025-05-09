import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RedeDePalpites - Seus Palpites, Nossa Expertise em Apostas Esportivas",
  description: "Bem-vindo ao RedeDePalpites! Encontre notícias, palpites de futebol, superodds, guias de apostas e análises táticas para aprimorar suas apostas esportivas.",
  keywords: "apostas esportivas, palpites de futebol, superodds, guias de apostas, notícias esportivas, análise tática, futebol brasileiro, apostas online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Navbar />
        <main style={{ minHeight: 'calc(100vh - 120px)', padding: '20px' }}>{/* Adjust minHeight based on Navbar/Footer height */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

