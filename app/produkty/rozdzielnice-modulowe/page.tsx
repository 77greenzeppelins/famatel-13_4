import { Metadata } from 'next';
/**Components**/
import CatPageContent from '@/components/nestedPagesCat/CatPageContent';
/**Basic Data**/
import { metadataText } from '@/data/textData';

/*
___CEO section
*/
export const metadata: Metadata = {
    title: { absolute: metadataText.cat9.title },
    description: metadataText.cat9.desc,
    keywords: metadataText.cat9.keywords,
    alternates: {
        canonical: metadataText.cat9.canonical
    }
};

export default function RozdzielniceModulowePage() {
    /**JSX**/
    return <CatPageContent categoryIndex={8} />;
}
