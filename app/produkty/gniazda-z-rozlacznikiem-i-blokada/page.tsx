import { Metadata } from 'next';
/**Components**/
import CatPageContent from '@/components/nestedPagesCat/CatPageContent';
/**Basic Data**/
import { catalogStructureData } from '@/data/catalogStructureData';
import { metadataText } from '@/data/textData';

/*
___CEO section
*/
export const metadata: Metadata = {
    title: metadataText.cat2.title,
    description: metadataText.cat2.desc,
    keywords: metadataText.cat2.keywords,
    alternates: {
        canonical: metadataText.cat2.canonical
    }
};

export default function GniazdaZRozlacznikiemIBlokadaPage() {
    /**JSX**/
    return <CatPageContent categoryIndex={catalogStructureData[1].mainCategoryIndex} />;
}
