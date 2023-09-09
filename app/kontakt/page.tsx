import { Metadata } from 'next/types';
/**Components**/
// import MainWrapper from '@/components/forMultiPage/pageWrappers/MainWrapper/MainWrapper';
import KontaktPageContent from '@/components/forSinglePage/5_KontaktPage/KontaktPageContent';
import { metadataText } from '@/data/textData';

export const metadata: Metadata = {
  title: metadataText.contactPage.title,
  description: metadataText.contactPage.desc,
  icons: {
    icon: {
      url: '/favicon.ico',
      type: 'image/x-icon',
    },
    shortcut: { url: '/apple-touch-icon.png', type: 'image/png' },
    apple: { url: '/apple-touch-icon.png', type: 'image/png' },
  },
};

export default function KontaktPage() {
  return (
    // <MainWrapper>
    <KontaktPageContent />
    // </MainWrapper>
  );
}
