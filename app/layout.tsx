/**CSS / Fonts Staff**/
import '@/styles/globals.css';
import { mySansSerif } from '@/nextFeatures/fonts/fonts';
/**NextFeatures**/
import type { Metadata } from 'next';
/**Components**/
import MainWrapper from '@/components/forMultiPage/pageWrappers/MainWrapper/MainWrapper';
import Header from '@/components/layout/rootLayout/header/Header';
import ProductsLayout from '@/components/layout/productsLayout/ProductsLayout';
// import Footer from '@/components/layout/rootLayout/footer/Footer';
// import OverlayForResizing from '@/components/layout/overlays/forResizing/OverlayForResizing';
// import PageTransitionWrapper from '@/components/forMultiPage/pageWrappers/pageTransitionWrapper/PageTransitionWrapper';
/**Basic Data**/
import { layoutText } from '@/data/textData';

/**...**/
export const metadata: Metadata = {
  title: layoutText.title,
  description: layoutText.description,
  generator: layoutText.generator,
  viewport: layoutText.viewport,
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
