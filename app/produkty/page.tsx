import { Metadata } from 'next/types';
/**Components**/
// import MainWrapper from '@/components/forMultiPage/pageWrappers/MainWrapper/MainWrapper';
import ProduktyPageContent from '@/components/forSinglePage/2_ProduktyPage/ProduktyPageContent';
/**Basic Data**/
import { metadataText } from '@/data/textData';

/**...**/
export const metadata: Metadata = {
  title: { absolute: metadataText.produktyPage.title },
  description: metadataText.produktyPage.desc,
  icons: {
    icon: {
      url: '/favicon.ico',
      type: 'image/x-icon',
    },
    shortcut: { url: '/apple-touch-icon.png', type: 'image/png' },
    apple: { url: '/apple-touch-icon.png', type: 'image/png' },
  },
};
export default function ProduktyPage() {
  return (
    // <MainWrapper>
    <ProduktyPageContent />
    // </MainWrapper>
  );
}
