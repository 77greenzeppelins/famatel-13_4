/*
catIndes = 0
subCat = 0
*/
/**Components**/
import SubCatPageContent from '@/components/nestedPagesSubCat/SubCatPageContent';
/**BasicData**/
import { catalogStructureData } from '@/data/catalogStructureData';

const WtyczkiIGniazdaściennePage = () => {
  /**Specify SubCat Index**/
  const subCatPath = catalogStructureData[0].subCategoriesPaths[2];
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

export default WtyczkiIGniazdaściennePage;
