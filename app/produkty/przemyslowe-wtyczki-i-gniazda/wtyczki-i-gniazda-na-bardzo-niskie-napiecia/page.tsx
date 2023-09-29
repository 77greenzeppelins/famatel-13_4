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
    title: { absolute: metadataText.cat1.subCat6.title },
    description: metadataText.cat1.subCat6.description,
    keywords: metadataText.cat1.subCat6.keywords,
    alternates: {
        canonical: metadataText.cat1.subCat6.canonical
    }
};

const WtyczkiIGniazdaNiskieNapieciaPage = () => {
    /**Specify SubCat Index**/
    const subCatPath = catalogStructureData[0].subCategoriesPaths[5];
    const subCatIndex = catalogStructureData[0].subCategoriesPaths.findIndex((el) => el === subCatPath);
    /**JSX**/
    return (
        <div className="flex flex-col w-full fc">
            <SubCatPageContent mainCatIndex={catalogStructureData[0].mainCategoryIndex} subCatIndex={subCatIndex} />
        </div>
    );
};

export default WtyczkiIGniazdaNiskieNapieciaPage;
