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
  title: metadataText.cat9.title,
  description: metadataText.cat9.desc,
  keywords: metadataText.cat9.keywords,
};

const RozdzielniceModuloweNuovaPlusPage = () => {
  /**Specify SubCat Index**/
  const subCatPath = catalogStructureData[8].subCategoriesPaths[3];
  const subCatIndex = catalogStructureData[8].subCategoriesPaths.findIndex(
    el => el === subCatPath
  );
  /**JSX**/
  return (
    <div className="flex flex-col w-full fc">
      <SubCatPageContent
        mainCatIndex={catalogStructureData[8].mainCategoryIndex}
        subCatIndex={subCatIndex}
      />
    </div>
  );
};

export default RozdzielniceModuloweNuovaPlusPage;
