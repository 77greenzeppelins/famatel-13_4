import { Metadata } from 'next';
/**Components**/
import CatPageContent from '@/components/nestedPagesCat/CatPageContent';
/**Basic Data**/
import { metadataText } from '@/data/textData';

/*
___CEO section
*/
export const metadata: Metadata = {
    title: metadataText.cat5.title,
    description: metadataText.cat5.desc,
    keywords: metadataText.cat5.keywords,
    alternates: {
        canonical: metadataText.cat5.canonical
    }
};

// export const dynamicParams = false;
// export async function generateStaticParams() {
//   return mainCategoriesPath.map((path, categoryIndex) => ({
//     cat: path,
//     categoryIndex: categoryIndex,
//   }));
// }

// interface Props {
//   params: { cat: string; categoryIndex: number };
// }

export default function PrzedluzaczeBebnowePage() {
    /**JSX**/
    return <CatPageContent categoryIndex={4} />;
}
