import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Agência Zebra | Marketing e Publicidade',
  description: 'Estratégia, criatividade, performance e tecnologia para marcas que querem liderar mercados.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
