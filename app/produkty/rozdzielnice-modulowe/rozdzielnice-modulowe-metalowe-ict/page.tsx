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
    title: { absolute: metadataText.cat9.subCat8.title },
    description: metadataText.cat9.subCat8.description,
    keywords: metadataText.cat9.subCat8.keywords,
    alternates: {
        canonical: metadataText.cat9.subCat8.canonical
    }
};

const RozdzielniceModuloweMetaloweIctPage = () => {
    /**Specify SubCat Index**/
    const subCatPath = catalogStructureData[8].subCategoriesPaths[7];
    const subCatIndex = catalogStructureData[8].subCategoriesPaths.findIndex((el) => el === subCatPath);
    /**JSX**/
    return (
        <div className="flex flex-col w-full fc">
            <SubCatPageContent mainCatIndex={catalogStructureData[8].mainCategoryIndex} subCatIndex={subCatIndex} />
        </div>
    );
};

export default RozdzielniceModuloweMetaloweIctPage;
