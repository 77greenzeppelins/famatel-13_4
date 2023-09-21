import { Metadata } from 'next/types';
/**Components**/
import SubCatPageWrapper from '@/components/forMultiPage/pageWrappers/subCatPageWrapper/SubCatPageWrapper';
import SubCatPageContent from '@/components/nestedPagesSubCat/SubCatPageContent';
/**BasicData**/
import { catalogStructureData } from '@/data/catalogStructureData';
import { metadataText } from '@/data/textData';

/*
___CEO section
*/
export const metadata: Metadata = {
  title: metadataText.cat3.title,
  description: metadataText.cat3.desc,
  keywords: metadataText.cat3.keywords,
};
const AdapteryPrzemysloweSchukoPage = () => {
  /**Specify SubCat Index**/
  const subCatPath = catalogStructureData[2].subCategoriesPaths[0];
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

export default AdapteryPrzemysloweSchukoPage;
