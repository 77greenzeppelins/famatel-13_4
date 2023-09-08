import { Metadata } from 'next/types';
/**Components**/
// import MainWrapper from '@/components/forMultiPage/pageWrappers/MainWrapper/MainWrapper';
import AktualnosciPageContent from '@/components/forSinglePage/4_AktualnosciPage/AktualnosciPageContent';
/**Basic Data**/
import { metadataText } from '@/data/textData';

/**...**/
export const metadata: Metadata = {
  title: { absolute: metadataText.aktualnosciPage.title },
  description: metadataText.aktualnosciPage.desc,
  icons: {
    icon: {
      url: '/favicon.ico',
      type: 'image/x-icon',
    },
    shortcut: { url: '/apple-touch-icon.png', type: 'image/png' },
    apple: { url: '/apple-touch-icon.png', type: 'image/png' },
  },
};

export default function AktualnosciPage() {
  /**JSX**/
  return (
    // <MainWrapper>
    <AktualnosciPageContent />
    // </MainWrapper>
  );
}
