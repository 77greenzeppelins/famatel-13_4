import { Metadata } from 'next';
/**Components**/
import CatPageContent from '@/components/nestedPagesCat/CatPageContent';
/**Basic Data**/
import { metadataText } from '@/data/textData';

/*
___CEO section
*/
export const metadata: Metadata = {
  title: metadataText.cat7.title,
  description: metadataText.cat7.desc,
  keywords: metadataText.cat7.keywords,
};

export default function LadowarkiSamochodowePage() {
  /**JSX**/
  return <CatPageContent categoryIndex={6} />;
}
