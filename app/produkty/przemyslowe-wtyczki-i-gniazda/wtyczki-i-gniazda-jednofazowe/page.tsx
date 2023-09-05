/**Components**/
import SubCatPageContent from '@/components/nestedPagesSubCat/SubCatPageContent';
/**BasicData**/
import { catalogStructureData } from '@/data/catalogStructureData';

const WtyczkiIGniazdaJednofazowePage = () => {
  /**Specify SubCat Index**/
  const subCatPath = catalogStructureData[0].subCategoriesPaths[4];
  const subCatIndex = catalogStructureData[0].subCategoriesPaths.findIndex(
    el => el === subCatPath
  );
  /**JSX**/
  return (
    <div className="flex flex-col w-full fc">
      <SubCatPageContent
        mainCatIndex={catalogStructureData[0].mainCategoryIndex}
        subCatIndex={subCatIndex}
      />
    </div>
  );
};

export default WtyczkiIGniazdaJednofazowePage;