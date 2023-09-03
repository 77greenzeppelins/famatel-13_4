/**Components**/
import SubCatPageContent from '@/components/nestedPagesSubCat/SubCatPageContent';
/**BasicData**/
import { catalogStructureData } from '@/data/catalogStructureData';

const RozdzielnicePrzemyslowePage = () => {
  /**Specify SubCat Index**/
  const subCatPath = catalogStructureData[7].subCategoriesPaths[1];
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

export default RozdzielnicePrzemyslowePage;
