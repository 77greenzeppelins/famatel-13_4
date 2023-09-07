/**CSS / Fonts Staff**/
import '@/styles/globals.css';
import { mySansSerif } from '@/nextFeatures/fonts/fonts';
/**NextFeatures**/
import type { Metadata } from 'next';
/**Components**/
import MainWrapper from '@/components/forMultiPage/pageWrappers/MainWrapper/MainWrapper';
import Header from '@/components/layout/rootLayout/header/Header';
import ProductsLayout from '@/components/layout/productsLayout/ProductsLayout';
/**Basic Data**/
import { layoutText } from '@/data/textData';

/**...**/
export const metadata: Metadata = {
  title: {
    default: layoutText.title,
    template: `%s | ${layoutText.title}`,
  },
  // description: {
  //   default: layoutText.description,
  //   template: "%s",
  // },

  description: layoutText.description,
  generator: layoutText.generator,
  viewport: layoutText.viewport,
  icons: {
    // icon: ['/favicon.ico'],
    // apple: ['/apple-touch-icon.png'],
    // shortcut: ['/apple-touch-icon.png'],
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  //manifest: 'https://nextjs.org/manifest.json
  twitter: {
    title: layoutText.title,
    description: layoutText.twitter.desc,
    card: 'summary_large_image',
    images: {
      url: 'https://famatel.pl/images/1_homePage/dirtyPlug_1200_1200.webp',
      alt: layoutText.twitter.imageAlt,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${mySansSerif.variable}`}>
      <body className="font-sans">
        <Header />
        {/* <EnergetabOverlay /> */}
        <ProductsLayout />
        {/* {children} */}
        {/* <OverlayForResizing /> */}
        {/* <PageTransitionWrapper> */}
        <MainWrapper>{children}</MainWrapper>
        {/* </PageTransitionWrapper> */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
