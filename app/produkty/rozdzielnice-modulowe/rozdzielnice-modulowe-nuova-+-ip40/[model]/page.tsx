import { Metadata } from 'next';
/**Comoponenst**/
import ModelPageContent from '@/components/nestedPagesModels/ModelPageContent';
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

export default function ObudowyPustePage() {
  /**JSX**/
  return (
    <div className="flex flex-col w-full fc">
      <ModelPageContent />
      {/* <div className="h-[50vh] fc">
        <p>{params.model}</p>
      </div> */}
    </div>
  );
}
