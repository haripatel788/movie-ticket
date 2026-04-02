import './globals.css';
import type { ReactNode } from 'react';
import { DM_Sans, Playfair_Display, JetBrains_Mono } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-body', weight: ['300', '400', '500', '600'] });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-display', weight: ['400', '600', '700', '900'] });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', weight: ['400', '500'] });

export const metadata = {
  title: 'CineVault — Movie Ticketing Reimagined',
  description: 'Discover, book, and personalize your movie outings with immersive design, seat maps, and curated recommendations.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-bg-void text-text-primary antialiased" data-fonts={`${dmSans.variable} ${playfair.variable} ${jetbrains.variable}`}>
        <div className="pointer-events-none film-grain" aria-hidden="true">
          <img src="/noise.svg" alt="" className="h-full w-full object-cover" />
        </div>
        <div className="cursor-spotlight" />
        <Navbar />
        <main className="relative z-10 flex min-h-[70vh] w-full flex-col gap-16 px-6 pb-16 pt-6 md:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
