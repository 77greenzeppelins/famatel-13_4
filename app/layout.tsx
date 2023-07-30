/**CSS / Fonts Staff**/
import '@/styles/globals.css';
import { mySanSerif } from '@/nextFeatures/fonts/fonts';
/**NextFeatures**/
import type { Metadata } from 'next';
/**Components**/
import Header from '@/components/layout/rootLayout/header/Header';
import Footer from '@/components/layout/rootLayout/footer/Footer';

export const metadata: Metadata = {
  title: 'Famatel Polska',
  description:
    'Famatel to międzynarodowy producent rozwiązań z zakresu  elektryki przemysłowej z ponad 30-letnim doświadczeniem. Oferujemy wysokiej jakości produkty, takie jak rozdzielnice, gniazda i wtyczki, które spełniają najwyższe standardy bezpieczeństwa i jakości. Dołącz do grona naszych zadowolonych klientów już dziś!',
  generator:
    'elektryka przemysłowa, gniazda przemysłowe, wtyczki przemysłowe, rozdzielnice przemysłowe, rozdzielnice, ',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${mySanSerif.variable}`}>
      <body className="font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
