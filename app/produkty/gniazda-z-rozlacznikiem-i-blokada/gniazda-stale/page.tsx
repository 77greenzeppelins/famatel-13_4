/**Components**/
import SubCatPageWrapper from '@/components/forMultiPage/pageWrappers/subCatPageWrapper/SubCatPageWrapper';
import SubCatPageContent from '@/components/nestedPagesSubCat/SubCatPageContent';
/**BasicData**/
import { catalogStructureData } from '@/data/catalogStructureData';

const GniazdaZBlokadaStalePage = () => {
  /**Specify SubCat Index**/
  const subCatPath = catalogStructureData[1].subCategoriesPaths[1];
  const subCatIndex = catalogStructureData[1].subCategoriesPaths.findIndex(
    el => el === subCatPath
  );
  /**JSX**/
  return (
    <SubCatPageWrapper>
      <SubCatPageContent
        mainCatIndex={catalogStructureData[1].mainCategoryIndex}
        subCatIndex={subCatIndex}
      />
    </SubCatPageWrapper>
  );
};

export default GniazdaZBlokadaStalePage;
