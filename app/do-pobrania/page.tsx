import { Metadata } from 'next/types';
/**Components**/
// import MainWrapper from '@/components/forMultiPage/pageWrappers/MainWrapper/MainWrapper';
import DoPobraniaPageContent from '@/components/forSinglePage/4_DoPobraniaPage/DoPobraniaPageContent';
/**Basic Data**/
import { metadataText } from '@/data/textData';

/**...**/
export const metadata: Metadata = {
    title: { absolute: metadataText.doPobraniaPage.title },
    description: metadataText.doPobraniaPage.desc,
    alternates: {
        canonical: metadataText.doPobraniaPage.canonical
    }
};

export default function DoPobraniaPage() {
    /**JSX**/
    return (
        // <MainWrapper>
        <DoPobraniaPageContent />
        // </MainWrapper>
    );
}
