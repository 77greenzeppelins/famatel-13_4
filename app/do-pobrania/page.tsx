import { Metadata } from 'next/types';
/**Components**/
// import MainWrapper from '@/components/forMultiPage/pageWrappers/MainWrapper/MainWrapper';
import DoPobraniaPageContent from '@/components/forSinglePage/4_DoPobraniaPage/DoPobraniaPageContent';
/**Basic Data**/
import { metadataText } from '@/data/textData';

/**...**/
export const metadata: Metadata = {
  title: { absolute: metadataText.doPobraniaPage.title },
  description: metadataText.doPobraniaPage.desc,
  icons: {
    icon: {
      url: '/favicon.ico',
      type: 'image/x-icon',
    },
    shortcut: { url: '/apple-touch-icon.png', type: 'image/png' },
    apple: { url: '/apple-touch-icon.png', type: 'image/png' },
  },
};

export default function DoPobraniaPage() {
  /**JSX**/
  return (
    // <MainWrapper>
    <DoPobraniaPageContent />
    // </MainWrapper>
  );
}
