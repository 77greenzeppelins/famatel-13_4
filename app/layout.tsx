/**CSS / Fonts Staff**/
import '@/styles/globals.css';
import { mySanSerif } from '@/nextFeatures/fonts/fonts';
/**NextFeatures**/
import type { Metadata } from 'next';
/**Components**/
import Header from '@/components/layout/rootLayout/header/Header';
import Footer from '@/components/layout/rootLayout/footer/Footer';
import OverlayForResizing from '@/components/layout/overlays/forResizing/OverlayForResizing';
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
    <html lang="en" className={`${mySanSerif.variable}`}>
      <body className="font-sans">
        <OverlayForResizing />
        <Header />
        {/* <PageTransitionWrapper> */}
        {children}
        {/* </PageTransitionWrapper> */}
        <Footer />
      </body>
    </html>
  );
}
