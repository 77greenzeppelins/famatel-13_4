import { Metadata } from 'next';
/**Components**/
import SubCatPageContent from '@/components/nestedPagesSubCat/SubCatPageContent';
/**BasicData**/
import { catalogStructureData } from '@/data/catalogStructureData';
import { metadataText } from '@/data/textData';

/*
___CEO section
*/
export const metadata: Metadata = {
  title: metadataText.cat8.title,
  description: metadataText.cat8.desc,
  keywords: metadataText.cat8.keywords,
};

const ObudowyPustePage = () => {
  /**Specify SubCat Index**/
  const subCatPath = catalogStructureData[7].subCategoriesPaths[0];
  const subCatIndex = catalogStructureData[7].subCategoriesPaths.findIndex(
    el => el === subCatPath
  );
  /**JSX**/
  return (
    <div className="flex flex-col w-full fc">
      <SubCatPageContent
        mainCatIndex={catalogStructureData[7].mainCategoryIndex}
        subCatIndex={subCatIndex}
      />
    </div>
  );
};

export default ObudowyPustePage;
