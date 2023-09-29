import { Metadata } from 'next/types';
/**Components**/
// import MainWrapper from '@/components/forMultiPage/pageWrappers/MainWrapper/MainWrapper';
import ProduktyPageContent from '@/components/forSinglePage/2_ProduktyPage/ProduktyPageContent';
/**Basic Data**/
import { metadataText } from '@/data/textData';

/**...**/
export const metadata: Metadata = {
    title: { absolute: metadataText.produktyPage.title },
    description: metadataText.produktyPage.desc,
    alternates: {
        canonical: metadataText.produktyPage.canonical
    }
};
export default function ProduktyPage() {
    return (
        // <MainWrapper>
        <ProduktyPageContent />
        // </MainWrapper>
    );
}
