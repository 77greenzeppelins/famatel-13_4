import { Metadata } from 'next';
/**Components**/
import PrzedluzaczeBebnoweContent from '@/components/nestedPagesSubCat/przedluzaczeBebnowe/PrzedluzaczeBebnoweContent';
/**BasicData**/
import { catalogStructureData } from '@/data/catalogStructureData';
import { metadataText } from '@/data/textData';

/*
___CEO section
*/
export const metadata: Metadata = {
  title: metadataText.cat5.title,
  description: metadataText.cat5.desc,
  keywords: metadataText.cat5.keywords,
};

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
