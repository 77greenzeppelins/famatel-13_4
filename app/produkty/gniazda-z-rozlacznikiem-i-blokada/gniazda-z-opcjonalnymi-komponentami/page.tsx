/**Components**/
import SubCatPageWrapper from '@/components/forMultiPage/pageWrappers/subCatPageWrapper/SubCatPageWrapper';
import SubCatPageContent from '@/components/nestedPagesSubCat/SubCatPageContent';
/**BasicData**/
import { catalogStructureData } from '@/data/catalogStructureData';

const GniazdaZBlokadaIKomponentamiPage = () => {
  /**Specify SubCat Index**/
  const subCatPath = catalogStructureData[1].subCategoriesPaths[2];
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

export default GniazdaZBlokadaIKomponentamiPage;