import { Metadata } from 'next';
/**Components**/
import CatPageContent from '@/components/nestedPagesCat/CatPageContent';
/**Basic Data**/
import { metadataText } from '@/data/textData';

/*
___CEO section
*/
export const metadata: Metadata = {
    title: { absolute: metadataText.cat10.title },
    description: metadataText.cat10.desc,
    keywords: metadataText.cat10.keywords,
    alternates: {
        canonical: metadataText.cat10.canonical
    }
};

export default function PuszkiInstalacyjnePage() {
    /**JSX**/
    return <CatPageContent categoryIndex={9} />;
}
