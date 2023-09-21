import { Metadata } from 'next';
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
  title: metadataText.cat2.title,
  description: metadataText.cat2.desc,
  keywords: metadataText.cat2.keywords,
};

const AdapteryPrzemysloweSchukoPage = () => {
  /**Specify SubCat Index**/
  const subCatPath = catalogStructureData[1].subCategoriesPaths[0];
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

export default AdapteryPrzemysloweSchukoPage;
