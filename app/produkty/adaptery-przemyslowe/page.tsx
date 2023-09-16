import { Metadata } from 'next/types';
/**Components**/
import CatPageContent from '@/components/nestedPagesCat/CatPageContent';
/**Basic Data**/
import { metadataText } from '@/data/textData';

/*
___CEO section
*/
export const metadata: Metadata = {
  title: metadataText.cat3.title,
  description: metadataText.cat3.desc,
  keywords: metadataText.cat3.keywords,
};

export default function AdapteryPrzemyslowePage() {
  /**JSX**/
  return <CatPageContent categoryIndex={2} />;
}
