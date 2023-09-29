import { Metadata } from 'next';
/**Components**/
import CatPageContent from '@/components/nestedPagesCat/CatPageContent';
/**Basic Data**/
import { metadataText } from '@/data/textData';
/*
___CEO section
*/
export const metadata: Metadata = {
    title: { absolute: metadataText.cat4.title },
    description: metadataText.cat4.desc,
    keywords: metadataText.cat4.keywords,
    alternates: {
        canonical: metadataText.cat4.canonical
    }
};

export default function GniazdaPodwieszanePage() {
    /**JSX**/
    return <CatPageContent categoryIndex={3} />;
}
