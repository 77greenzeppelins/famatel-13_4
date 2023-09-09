import { Metadata } from 'next/types';
/**Components**/
import CatPageContent from '@/components/nestedPagesCat/CatPageContent';
/**Basic Data**/
import { metadataText } from '@/data/textData';

// export const metadata: Metadata = {
//   title: metadataText.categoriesPages.cat3,
//   description: metadataText.categoriesPages.cat3,
// };

export default function AdapteryPrzemyslowePage() {
  /**JSX**/
  return <CatPageContent categoryIndex={2} />;
}
