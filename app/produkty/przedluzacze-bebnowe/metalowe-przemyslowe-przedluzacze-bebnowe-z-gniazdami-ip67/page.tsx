/**Components**/
import PrzedluzaczeBebnoweContent from '@/components/nestedPagesSubCat/przedluzaczeBebnowe/PrzedluzaczeBebnoweContent';
/**BasicData**/
import { catalogStructureData } from '@/data/catalogStructureData';

const PrzedluzaczeDebnoweMetalowePage = () => {
  /**Specify SubCat Index**/
  const subCatPath = catalogStructureData[4].subCategoriesPaths[2];
  const subCatIndex = catalogStructureData[4].subCategoriesPaths.findIndex(
    el => el === subCatPath
  );
  /**JSX**/
  return (
    <div className="flex flex-col w-full fc">
      <PrzedluzaczeBebnoweContent
        mainCatIndex={catalogStructureData[4].mainCategoryIndex}
        subCatIndex={subCatIndex}
      />
    </div>
  );
};

export default PrzedluzaczeDebnoweMetalowePage;
