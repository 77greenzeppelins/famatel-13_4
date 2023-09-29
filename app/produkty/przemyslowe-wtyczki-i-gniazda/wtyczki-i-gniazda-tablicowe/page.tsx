import { Metadata } from 'next';
/**Components**/
import SubCatPageContent from '@/components/nestedPagesSubCat/SubCatPageContent';
/**BasicData**/
import { catalogStructureData } from '@/data/catalogStructureData';
import { metadataText } from '@/data/textData';

/*
___CEO section
*/
export const metadata: Metadata = {
    title: { absolute: metadataText.cat1.subCat2.title },
    description: metadataText.cat1.subCat2.description,
    keywords: metadataText.cat1.subCat2.keywords,
    alternates: {
        canonical: metadataText.cat1.subCat2.canonical
    }
};

const WtyczkiIGniazdaTablicowePage = () => {
    /**Specify SubCat Index**/
    const subCatPath = catalogStructureData[0].subCategoriesPaths[1];
    const subCatIndex = catalogStructureData[0].subCategoriesPaths.findIndex((el) => el === subCatPath);
    /**JSX**/
    return (
        <div className="flex flex-col w-full fc">
            <SubCatPageContent mainCatIndex={catalogStructureData[0].mainCategoryIndex} subCatIndex={subCatIndex} />
        </div>
    );
};

export default WtyczkiIGniazdaTablicowePage;
