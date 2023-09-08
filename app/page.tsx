import { Metadata } from 'next/types';
/**Components**/
// import MainWrapper from '@/components/forMultiPage/pageWrappers/MainWrapper/MainWrapper';
import HomePageContent from '@/components/forSinglePage/1_HomePage/HomePageContent';

/**...**/
export const metadata: Metadata = {
  icons: {
    icon: {
      url: '/favicon.ico',
      type: 'image/x-icon',
    },
    shortcut: { url: '/apple-touch-icon.png', type: 'image/png' },
    apple: { url: '/apple-touch-icon.png', type: 'image/png' },
  },
};
export default function HomePage() {
  return (
    // <MainWrapper>
    <HomePageContent />
    // </MainWrapper>
  );
}
