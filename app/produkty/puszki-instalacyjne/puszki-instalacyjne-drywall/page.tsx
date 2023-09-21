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
  title: metadataText.cat10.title,
  description: metadataText.cat10.desc,
  keywords: metadataText.cat10.keywords,
};

const PuszkiInstalacyjneDryWallPage = () => {
  /**Specify SubCat Index**/
  const subCatPath = catalogStructureData[9].subCategoriesPaths[1];
  const subCatIndex = catalogStructureData[9].subCategoriesPaths.findIndex(
    el => el === subCatPath
  );
  /**JSX**/
  return (
    <div className="flex flex-col w-full fc">
      <SubCatPageContent
        mainCatIndex={catalogStructureData[9].mainCategoryIndex}
        subCatIndex={subCatIndex}
      />
    </div>
  );
};

export default PuszkiInstalacyjneDryWallPage;
