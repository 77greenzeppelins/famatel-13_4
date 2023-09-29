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
    title: { absolute: `${metadataText.cat2.subCat4.title}` },
    description: metadataText.cat2.subCat4.description,
    keywords: metadataText.cat2.subCat4.keywords,
    alternates: {
        canonical: metadataText.cat2.subCat4.canonical
    }
};

const AkcesoriaGniazdaZBlokadaPage = () => {
    /**Specify SubCat Index**/
    const subCatPath = catalogStructureData[1].subCategoriesPaths[3];
    const subCatIndex = catalogStructureData[1].subCategoriesPaths.findIndex((el) => el === subCatPath);
    /**JSX**/
    return (
        <SubCatPageWrapper>
            <SubCatPageContent mainCatIndex={catalogStructureData[1].mainCategoryIndex} subCatIndex={subCatIndex} />
        </SubCatPageWrapper>
    );
};

export default AkcesoriaGniazdaZBlokadaPage;
