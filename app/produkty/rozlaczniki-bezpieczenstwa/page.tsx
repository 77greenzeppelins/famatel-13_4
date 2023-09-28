import { Metadata } from 'next';
/**Components**/
import CatPageContent from '@/components/nestedPagesCat/CatPageContent';
/**Basic Data**/
import { metadataText } from '@/data/textData';

/*
___CEO section
*/
export const metadata: Metadata = {
    title: metadataText.cat6.title,
    description: metadataText.cat6.desc,
    keywords: metadataText.cat6.keywords,
    alternates: {
        canonical: metadataText.cat6.canonical
    }
};

export default function RozlacznikiBezpieczenstwaPage() {
    /**JSX**/
    return <CatPageContent categoryIndex={5} />;
}
