import { Metadata } from 'next/types';
/**Components**/
import MongoTestContent from '@/components/forSinglePage/0_MongoTest/MongoPageContent';

export const metadata: Metadata = {
  title: 'Mongo Test',
  description: 'Mongo Test',
  // icons: {
  //   icon: {
  //     url: '/favicon.ico',
  //     type: 'image/x-icon',
  //   },
  //   shortcut: { url: '/apple-touch-icon.png', type: 'image/png' },
  //   apple: { url: '/apple-touch-icon.png', type: 'image/png' },
  // },
};

export default function MongoPage() {
  return (
    // <MainWrapper>
    <MongoTestContent />
    // </MainWrapper>
  );
}
