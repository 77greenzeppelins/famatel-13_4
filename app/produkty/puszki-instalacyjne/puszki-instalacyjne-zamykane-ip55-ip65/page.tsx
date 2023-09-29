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
    title: { absolute: metadataText.cat10.subCat1.title },
    description: metadataText.cat10.subCat1.description,
    keywords: metadataText.cat10.subCat1.keywords,
    alternates: {
        canonical: metadataText.cat10.subCat1.canonical
    }
};

const PuszkiInstalacyjnePage = () => {
    /**Specify SubCat Index**/
    const subCatPath = catalogStructureData[9].subCategoriesPaths[0];
    const subCatIndex = catalogStructureData[9].subCategoriesPaths.findIndex((el) => el === subCatPath);
    /**JSX**/
    return (
        <div className="flex flex-col w-full fc">
            <SubCatPageContent mainCatIndex={catalogStructureData[9].mainCategoryIndex} subCatIndex={subCatIndex} />
        </div>
    );
};

export default PuszkiInstalacyjnePage;
