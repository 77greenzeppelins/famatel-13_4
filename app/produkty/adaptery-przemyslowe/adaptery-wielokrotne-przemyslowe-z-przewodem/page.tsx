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
    title: { absolute: metadataText.cat3.subCat3.title },
    description: metadataText.cat3.subCat3.description,
    keywords: metadataText.cat3.subCat3.keywords,
    alternates: {
        canonical: metadataText.cat3.subCat3.canonical
    }
};

const AdapteryWielokrotnePrzemysloweZPrzewodemPage = () => {
    /**Specify SubCat Index**/
    const subCatPath = catalogStructureData[2].subCategoriesPaths[2];
    const subCatIndex = catalogStructureData[2].subCategoriesPaths.findIndex((el) => el === subCatPath);
    /**JSX**/
    return (
        <SubCatPageWrapper>
            <SubCatPageContent mainCatIndex={catalogStructureData[2].mainCategoryIndex} subCatIndex={subCatIndex} />
        </SubCatPageWrapper>
    );
};

export default AdapteryWielokrotnePrzemysloweZPrzewodemPage;
