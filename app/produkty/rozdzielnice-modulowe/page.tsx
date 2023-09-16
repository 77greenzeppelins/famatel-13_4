import { Metadata } from 'next';
/**Components**/
import CatPageContent from '@/components/nestedPagesCat/CatPageContent';
/**Basic Data**/
import { metadataText } from '@/data/textData';

/*
___CEO section
*/
export const metadata: Metadata = {
  title: metadataText.cat9.title,
  description: metadataText.cat9.desc,
  keywords: metadataText.cat9.keywords,
};

export default function RozdzielniceModulowePage() {
  /**JSX**/
  return <CatPageContent categoryIndex={8} />;
}
