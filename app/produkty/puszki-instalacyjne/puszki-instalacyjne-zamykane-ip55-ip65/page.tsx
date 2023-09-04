/**Components**/
import SubCatPageContent from '@/components/nestedPagesSubCat/SubCatPageContent';
/**BasicData**/
import { catalogStructureData } from '@/data/catalogStructureData';

const PuszkiInstalacyjnePage = () => {
  /**Specify SubCat Index**/
  const subCatPath = catalogStructureData[9].subCategoriesPaths[0];
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

export default PuszkiInstalacyjnePage;
