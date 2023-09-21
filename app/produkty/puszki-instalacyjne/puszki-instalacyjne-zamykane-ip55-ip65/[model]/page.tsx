import { Metadata } from 'next';
/**Comoponenst**/
import ModelPageContent from '@/components/nestedPagesModels/ModelPageContent';
/**Basic Data**/
import { metadataText } from '@/data/textData';

/*
___CEO section
*/
export const metadata: Metadata = {
  title: metadataText.cat10.title,
  description: metadataText.cat10.desc,
  keywords: metadataText.cat10.keywords,
};

export default function ObudowyPustePage() {
  /**JSX**/
  return (
    <div className="flex flex-col w-full fc">
      <ModelPageContent />
    </div>
  );
}
