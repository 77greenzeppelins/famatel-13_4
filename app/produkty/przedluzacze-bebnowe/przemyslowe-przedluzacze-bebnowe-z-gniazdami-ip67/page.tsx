/**Components**/
import PrzedluzaczeBebnoweContent from '@/components/nestedPagesSubCat/przedluzaczeBebnowe/PrzedluzaczeBebnoweContent';
/**BasicData**/
import { catalogStructureData } from '@/data/catalogStructureData';

const PrzedluzaczeDebnowePrzemyslowePage = () => {
  /**Specify SubCat Index**/
  const subCatPath = catalogStructureData[4].subCategoriesPaths[1];
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

export default PrzedluzaczeDebnowePrzemyslowePage;
