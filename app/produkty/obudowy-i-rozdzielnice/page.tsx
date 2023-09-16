import { Metadata } from 'next';
/**Components**/
import CatPageContent from '@/components/nestedPagesCat/CatPageContent';
/**Basic Data**/
import { metadataText } from '@/data/textData';

/*
___CEO section
*/
export const metadata: Metadata = {
  title: metadataText.cat8.title,
  description: metadataText.cat8.desc,
  keywords: metadataText.cat8.keywords,
};

export default function ObudowyIRozdzielnicePage() {
  /**JSX**/
  return <CatPageContent categoryIndex={7} />;
}
