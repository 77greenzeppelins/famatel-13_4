/**Components**/
import SubCatPageContent from '@/components/nestedPagesSubCat/SubCatPageContent';
/**BasicData**/
import { catalogStructureData } from '@/data/catalogStructureData';

const RozdzielniceModuloweMetalowePage = () => {
  /**Specify SubCat Index**/
  const subCatPath = catalogStructureData[8].subCategoriesPaths[6];
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

export default RozdzielniceModuloweMetalowePage;
