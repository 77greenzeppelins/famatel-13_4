/**Components**/
// import MainWrapper from '@/components/forMultiPage/pageWrappers/MainWrapper/MainWrapper';
import NotaPrawnaContent from '@/components/forSinglePage/10_NotaPrawna/NotaPrawnaContent';
import { metadataText } from '@/data/textData';

export const metadata = {
  title: { absolute: metadataText.notaPrawnaPage.title },
  description: metadataText.notaPrawnaPage.desc,
  icons: {
    // icon: {
    //   url: '/favicon-32x32.png',
    //   type: 'image/png',
    // },
    icon: {
      url: '/favicon.ico',
      type: 'image/x-icon',
    },
    shortcut: { url: '/apple-touch-icon.png', type: 'image/png' },
    apple: { url: '/apple-touch-icon.png', type: 'image/png' },
  },
};

export default function NotaPrawnaPage() {
  /**JSX**/
  return (
    // <MainWrapper>
    <NotaPrawnaContent />
    // </MainWrapper>
  );
}
