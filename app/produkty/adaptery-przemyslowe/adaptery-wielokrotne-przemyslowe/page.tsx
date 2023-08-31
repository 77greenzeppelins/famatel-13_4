/**Components**/
import SubCatPageWrapper from '@/components/forMultiPage/pageWrappers/subCatPageWrapper/SubCatPageWrapper';
import SubCatPageContent from '@/components/nestedPagesSubCat/SubCatPageContent';
/**BasicData**/
import { catalogStructureData } from '@/data/catalogStructureData';

const AdapteryWielokrotnePrzemyslowePage = () => {
  /**Specify SubCat Index**/
  const subCatPath = catalogStructureData[2].subCategoriesPaths[1];
  const subCatIndex = catalogStructureData[2].subCategoriesPaths.findIndex(
    el => el === subCatPath
  );
  /**JSX**/
  return (
    <SubCatPageWrapper>
      <SubCatPageContent
        mainCatIndex={catalogStructureData[2].mainCategoryIndex}
        subCatIndex={subCatIndex}
      />
    </SubCatPageWrapper>
  );
};

export default AdapteryWielokrotnePrzemyslowePage;
